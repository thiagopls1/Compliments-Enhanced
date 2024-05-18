import { Exclude } from 'class-transformer';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  readonly id: string;

  @Unique('unique_username', ['userName'])
  @Column({ type: 'text' })
  userName: string;

  @Column({ type: 'text' })
  displayName: string;

  @Column({ type: 'text', array: true })
  roles: string[];

  @Unique('unique_email', ['email'])
  @Column({ type: 'text' })
  email: string;

  @Exclude()
  @Column({ type: 'text' })
  password: string;

  @Column({ type: 'text' })
  gender: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
