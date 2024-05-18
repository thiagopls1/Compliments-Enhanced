import { User } from './user.entity';
import { Tag } from './tag.entity';
export declare class Compliment {
    id: string;
    userSender: User;
    userReceiver: User;
    tag: Tag;
    message: string;
    createdAt: Date;
    userSenderId: string;
    userReceiverId: string;
    tagId: string;
}
