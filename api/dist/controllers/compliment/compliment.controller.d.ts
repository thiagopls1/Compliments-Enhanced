import { CreateComplimentDto } from 'src/dtos/compliment/create-compliment.dto';
import { ComplimentService } from 'src/services/compliment/compliment.service';
export declare class ComplimentController {
    private readonly complimentService;
    constructor(complimentService: ComplimentService);
    create(createComplimentDto: CreateComplimentDto): Promise<import("../../entities/compliment.entity").Compliment>;
    listReceived(id: string): Promise<import("../../entities/compliment.entity").Compliment[]>;
    listSent(id: string): Promise<import("../../entities/compliment.entity").Compliment[]>;
    delete(id: string): Promise<import("typeorm").DeleteResult>;
}
