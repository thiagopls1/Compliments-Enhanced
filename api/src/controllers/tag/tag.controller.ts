import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { TagService } from '../../services/tag/tag.service';
import { CreateTagDto } from '../../dtos/tag/create-tag.dto';
import { UpdateTagDto } from '../../dtos/tag/update-tag.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/guards/auth/auth.guard';
import { AdminGuard } from 'src/guards/admin/admin.guard';

@ApiBearerAuth()
@UseGuards(AuthGuard)
@ApiTags('Tag')
@Controller('tag')
export class TagController {
  constructor(private readonly tagService: TagService) {}

  @UseGuards(AdminGuard)
  @Post('create')
  create(@Body() createTagDto: CreateTagDto) {
    return this.tagService.create(createTagDto);
  }

  @Get('list')
  findAll() {
    return this.tagService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.tagService.findOne(id);
  }

  @UseGuards(AdminGuard)
  @Patch(':id/update')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateTagDto: UpdateTagDto,
  ) {
    return this.tagService.update(id, updateTagDto);
  }

  @UseGuards(AdminGuard)
  @Delete(':id/delete')
  delete(@Param('id') id: string) {
    return this.tagService.remove(id);
  }
}
