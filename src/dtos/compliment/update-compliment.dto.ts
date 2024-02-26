import { PartialType } from '@nestjs/swagger';
import { CreateComplimentDto } from './create-compliment.dto';

export class UpdateComplimentDto extends PartialType(CreateComplimentDto) {}
