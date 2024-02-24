import { Injectable } from '@nestjs/common';
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
  create(createTagDto: CreateTagDto) {
    const currentDate = new Date();
    const tag: Tag = new Tag();
    tag.name = createTagDto.name;
    tag.createdAt = currentDate;
    tag.updatedAt = currentDate;
  }

  findAll() {
    return this.tagRepository.find();
  }

  findOne(id: string) {
    return this.tagRepository.findOneBy({ id });
  }

  update(id: string, updateTagDto: UpdateTagDto): Promise<Tag> {
    const tag: Tag = new Tag();
    tag.id = id;
    tag.name = updateTagDto.name;
    tag.updatedAt = new Date();
    return this.tagRepository.save(tag);
  }

  remove(id: string) {
    return this.tagRepository.delete({ id });
  }
}
