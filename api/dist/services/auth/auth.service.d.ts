import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/dtos/user/create-user.dto';
import { User } from 'src/entities/user.entity';
import { AuthUserDto } from 'src/dtos/user/auth-user.dto';
import { Repository } from 'typeorm';
export declare class AuthService {
    private readonly userRepository;
    private readonly jwtService;
    constructor(userRepository: Repository<User>, jwtService: JwtService);
    login(authUserDto: AuthUserDto): Promise<any>;
    register(user: CreateUserDto): Promise<User>;
}
