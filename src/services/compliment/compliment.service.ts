import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateComplimentDto } from 'src/dtos/compliment/create-compliment.dto';
import { Compliment } from 'src/entities/compliment.entity';
import { Tag } from 'src/entities/tag.entity';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ComplimentService {
  constructor(
    @InjectRepository(Compliment)
    private readonly complimentRepository: Repository<Compliment>,
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    @InjectRepository(Tag) private readonly tagRepository: Repository<Tag>,
  ) {}

  //  TODO: Get UserSender by token
  async create(createComplimentDto: CreateComplimentDto): Promise<Compliment> {
    const compliment = new Compliment();
    if (
      !this.userRepository.findOneBy({ id: createComplimentDto.userReceiverId })
    )
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);

    if (!this.tagRepository.findOneBy({ id: createComplimentDto.tagId }))
      throw new HttpException('Tag not found', HttpStatus.NOT_FOUND);

    compliment.userReceiver = await this.userRepository.findOneBy({
      id: createComplimentDto.userReceiverId,
    });

    compliment.tag = await this.tagRepository.findOneBy({
      id: createComplimentDto.tagId,
    });

    compliment.message = createComplimentDto.message;
    return this.complimentRepository.save(compliment);
  }

  listSent(userSenderId: string): Promise<Compliment[]> {
    if (!this.userRepository.findOneBy({ id: userSenderId }))
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);

    return this.complimentRepository.findBy({ userSenderId });
  }

  listReceived(userReceiverId: string): Promise<Compliment[]> {
    if (!this.userRepository.findOneBy({ id: userReceiverId }))
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);

    return this.complimentRepository.findBy({ userReceiverId });
  }

  delete(id: string) {
    if (!this.complimentRepository.findOneBy({ id })) {
      throw new HttpException('Compliment not found', HttpStatus.NOT_FOUND);
    }
    return this.complimentRepository.delete({ id });
  }
}
