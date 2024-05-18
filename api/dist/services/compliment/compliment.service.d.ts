import { CreateComplimentDto } from 'src/dtos/compliment/create-compliment.dto';
import { Compliment } from 'src/entities/compliment.entity';
import { Tag } from 'src/entities/tag.entity';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
export declare class ComplimentService {
    private readonly complimentRepository;
    private readonly userRepository;
    private readonly tagRepository;
    constructor(complimentRepository: Repository<Compliment>, userRepository: Repository<User>, tagRepository: Repository<Tag>);
    create(createComplimentDto: CreateComplimentDto): Promise<Compliment>;
    listSent(userSenderId: string): Promise<Compliment[]>;
    listReceived(userReceiverId: string): Promise<Compliment[]>;
    delete(id: string): Promise<import("typeorm").DeleteResult>;
}
