import { ApiHideProperty, ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';
import { IsAlphanumeric, IsDate, IsEmail } from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @IsAlphanumeric()
  @ApiProperty()
  displayName: string;

  @ApiProperty()
  roles: string[];

  @IsEmail()
  @ApiProperty()
  email: string;

  @IsDate()
  @ApiHideProperty()
  updatedAt: Date;
}
