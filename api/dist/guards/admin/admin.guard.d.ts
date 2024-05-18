import { CanActivate, ExecutionContext } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
export declare class AdminGuard implements CanActivate {
    private jwtService;
    private configService;
    constructor(jwtService: JwtService, configService: ConfigService);
    allowedRoles: string[];
    canActivate(context: ExecutionContext): Promise<boolean>;
    private extractTokenFromHeader;
}
