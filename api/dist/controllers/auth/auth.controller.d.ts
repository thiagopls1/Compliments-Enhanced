import { AuthUserDto } from 'src/dtos/user/auth-user.dto';
import { User } from 'src/entities/user.entity';
import { AuthService } from 'src/services/auth/auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(authUserDto: AuthUserDto): Promise<any>;
    register(user: User): Promise<User>;
}
