import { TagService } from '../../services/tag/tag.service';
import { CreateTagDto } from '../../dtos/tag/create-tag.dto';
import { UpdateTagDto } from '../../dtos/tag/update-tag.dto';
export declare class TagController {
    private readonly tagService;
    constructor(tagService: TagService);
    create(createTagDto: CreateTagDto): Promise<import("../../entities/tag.entity").Tag>;
    findAll(): Promise<import("../../entities/tag.entity").Tag[]>;
    findOne(id: string): Promise<import("../../entities/tag.entity").Tag>;
    update(id: string, updateTagDto: UpdateTagDto): Promise<import("../../entities/tag.entity").Tag>;
    delete(id: string): Promise<import("typeorm").DeleteResult>;
}
