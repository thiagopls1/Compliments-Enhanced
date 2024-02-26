import { IsString, IsUUID } from 'class-validator';

export class CreateComplimentDto {
  @IsString()
  @IsUUID()
  userReceiverId: string;

  @IsString()
  @IsUUID()
  tagId: string;

  @IsString()
  message: string;
}
