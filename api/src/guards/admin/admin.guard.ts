import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}
  allowedRoles: string[] = ['admin'];
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request);
    if (!token) {
      throw new UnauthorizedException();
    }
    try {
      const payload = await this.jwtService.verifyAsync(token, {
        secret: this.configService.get('JWT_SECRET'),
      });
      request['user'] = payload;
    } catch {
      throw new HttpException('Action forbidden', HttpStatus.FORBIDDEN);
    }
    const tokenClaims = this.jwtService.decode(token);
    console.log(tokenClaims);
    if (
      !tokenClaims.roles.some((role: string) =>
        this.allowedRoles.includes(role),
      )
    )
      throw new HttpException('Action forbidden', HttpStatus.FORBIDDEN);
    return true;
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}
