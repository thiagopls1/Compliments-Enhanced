import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from 'src/dtos/user/create-user.dto';
import { UpdateUserDto } from 'src/dtos/user/update-user.dto';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    if (
      await this.userRepository.findOneBy({ userName: createUserDto.userName })
    )
      throw new HttpException(
        `Username ${createUserDto.userName} already used`,
        HttpStatus.BAD_REQUEST,
      );

    if (await this.userRepository.findOneBy({ email: createUserDto.email }))
      throw new HttpException(
        `Email ${createUserDto.email} already used`,
        HttpStatus.BAD_REQUEST,
      );

    const user: User = new User();
    const hashPassword = this.hashPassword(createUserDto.password);
    user.userName = createUserDto.userName;
    user.displayName = createUserDto.displayName;
    user.email = createUserDto.email;
    user.roles = createUserDto.roles;
    user.password = hashPassword;
    user.gender = createUserDto.gender;
    return this.userRepository.save(user);
  }

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  findOne(userName: string): Promise<User> {
    const user = this.userRepository.findOneBy({ userName });
    if (!user) throw new HttpException('User not found', HttpStatus.NOT_FOUND);

    return user;
  }

  update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    if (!this.userRepository.findOneBy({ id }))
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);

    return this.userRepository.save({ id, ...updateUserDto });
  }

  delete(id: string) {
    if (!this.userRepository.findOneBy({ id }))
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);

    return this.userRepository.delete({ id });
  }

  hashPassword(password: string): string {
    const salt = 10;
    return bcrypt.hashSync(password, salt);
  }
}
