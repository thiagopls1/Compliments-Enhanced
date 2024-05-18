import { CreateUserDto } from 'src/dtos/user/create-user.dto';
import { UpdateUserDto } from 'src/dtos/user/update-user.dto';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    create(createUserDto: CreateUserDto): Promise<User>;
    findAll(): Promise<User[]>;
    findOne(userName: string): Promise<User>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<User>;
    delete(id: string): Promise<import("typeorm").DeleteResult>;
    hashPassword(password: string): string;
}
