import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ComplimentController } from 'src/controllers/compliment/compliment.controller';
import { Compliment } from 'src/entities/compliment.entity';
import { Tag } from 'src/entities/tag.entity';
import { User } from 'src/entities/user.entity';
import { ComplimentService } from 'src/services/compliment/compliment.service';

@Module({
  imports: [TypeOrmModule.forFeature([Compliment, User, Tag])],
  controllers: [ComplimentController],
  providers: [ComplimentService],
})
export class ComplimentModule {}
