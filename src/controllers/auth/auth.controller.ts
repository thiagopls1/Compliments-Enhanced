import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthUserDto } from 'src/dtos/user/auth-user.dto';
import { User } from 'src/entities/user.entity';
import { AuthGuard } from 'src/guards/auth/auth.guard';
import { AuthService } from 'src/services/auth/auth.service';

@ApiBearerAuth()
@UseGuards(AuthGuard)
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
