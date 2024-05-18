import { CreateTagDto } from '../../dtos/tag/create-tag.dto';
import { UpdateTagDto } from '../../dtos/tag/update-tag.dto';
import { Tag } from 'src/entities/tag.entity';
import { Repository } from 'typeorm';
export declare class TagService {
    private readonly tagRepository;
    constructor(tagRepository: Repository<Tag>);
    create(createTagDto: CreateTagDto): Promise<Tag>;
    findAll(): Promise<Tag[]>;
    findOne(id: string): Promise<Tag>;
    update(id: string, updateTagDto: UpdateTagDto): Promise<Tag>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
