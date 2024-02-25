import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateTagDto } from '../../dtos/tag/create-tag.dto';
import { UpdateTagDto } from '../../dtos/tag/update-tag.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Tag } from 'src/entities/tag.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TagService {
  constructor(
    @InjectRepository(Tag) private readonly tagRepository: Repository<Tag>,
  ) {}
  create(createTagDto: CreateTagDto): Promise<Tag> {
    const tag: Tag = new Tag();
    tag.name = createTagDto.name;

    return this.tagRepository.save(tag);
  }

  findAll(): Promise<Tag[]> {
    return this.tagRepository.find();
  }

  findOne(id: string): Promise<Tag> {
    const tag = this.tagRepository.findOneBy({ id });
    if (!tag) {
      throw new HttpException('Tag not found', 404);
    }
    return tag;
  }

  update(id: string, updateTagDto: UpdateTagDto): Promise<Tag> {
    if (!this.tagRepository.findOneBy({ id })) {
      throw new HttpException('Tag not found', HttpStatus.NOT_FOUND);
    }
    updateTagDto.updatedAt = new Date();
    return this.tagRepository.save({ id, ...updateTagDto });
  }

  remove(id: string) {
    if (!this.tagRepository.findOneBy({ id })) {
      throw new HttpException('Tag not found', HttpStatus.NOT_FOUND);
    }
    return this.tagRepository.delete({ id });
  }
}
