import { Module } from '@nestjs/common';
import { TagService } from '../services/tag/tag.service';
import { TagController } from '../controllers/tag/tag.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tag } from 'src/entities/tag.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Tag])],
  controllers: [TagController],
  providers: [TagService],
})
export class TagModule {}
