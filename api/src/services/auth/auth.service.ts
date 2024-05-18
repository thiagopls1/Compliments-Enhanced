import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from 'src/dtos/user/create-user.dto';
import { User } from 'src/entities/user.entity';
import { AuthUserDto } from 'src/dtos/user/auth-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    private readonly jwtService: JwtService,
  ) {}
  async login(authUserDto: AuthUserDto): Promise<any> {
    const user = await this.userRepository.findOne({
      where: { userName: authUserDto.userName },
    });
    if (!user)
      throw new HttpException(
        'User does not exist or password not valid',
        HttpStatus.UNAUTHORIZED,
      );
    const passwordIsValid = await bcrypt.compare(
      authUserDto.password,
      user.password,
    );
    if (!passwordIsValid)
      throw new HttpException(
        'User does not exist or password not valid',
        HttpStatus.UNAUTHORIZED,
      );

    const payload = {
      sub: user.id,
      displayName: user.displayName,
      userName: user.userName,
      email: user.email,
      roles: user.roles,
    };
    return { access_token: await this.jwtService.signAsync(payload) };
  }

  async register(user: CreateUserDto): Promise<User> {
    return this.userRepository.create(user);
  }
}
