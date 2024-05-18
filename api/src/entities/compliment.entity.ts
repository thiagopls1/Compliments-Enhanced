import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './user.entity';
import { Tag } from './tag.entity';

@Entity()
export class Compliment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @JoinColumn({ name: 'userSenderId' })
  @ManyToOne(() => User)
  userSender: User;

  @JoinColumn({ name: 'userReceiverId' })
  @ManyToOne(() => User)
  userReceiver: User;

  @JoinColumn({ name: 'tagId' })
  @ManyToOne(() => Tag)
  tag: Tag;

  @Column()
  message: string;

  @CreateDateColumn()
  createdAt: Date;

  userSenderId: string;
  userReceiverId: string;
  tagId: string;
}
