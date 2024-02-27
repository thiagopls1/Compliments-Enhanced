import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthUserDto } from 'src/dtos/user/auth-user.dto';
import { User } from 'src/entities/user.entity';
import { AuthService } from 'src/services/auth/auth.service';

@ApiTags('Auth')
@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  login(@Body() authUserDto: AuthUserDto): Promise<any> {
    return this.authService.login(authUserDto);
  }

  @Post('register')
  register(@Body() user: User): Promise<User> {
    return this.authService.register(user);
  }
}
