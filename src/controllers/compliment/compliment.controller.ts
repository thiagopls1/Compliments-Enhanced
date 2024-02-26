import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateComplimentDto } from 'src/dtos/compliment/create-compliment.dto';
import { ComplimentService } from 'src/services/compliment/compliment.service';

@ApiTags('Compliment')
@Controller('user')
export class ComplimentController {
  constructor(private readonly complimentService: ComplimentService) {}

  @Post('/compliment/create')
  create(@Body() createComplimentDto: CreateComplimentDto) {
    return this.complimentService.create(createComplimentDto);
  }
  @Get(':id/compliment/recieved')
  listReceived(@Param('id', ParseUUIDPipe) id: string) {
    return this.complimentService.listReceived(id);
  }
  @Get(':id/compliment/sent')
  listSent(@Param('id', ParseUUIDPipe) id: string) {
    return this.complimentService.listSent(id);
  }

  @Delete('compliment/:id/delete')
  delete(@Param('id', ParseUUIDPipe) id: string) {
    return this.complimentService.delete(id);
  }
}
