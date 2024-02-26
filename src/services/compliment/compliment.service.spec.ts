import { Test, TestingModule } from '@nestjs/testing';
import { ComplimentService } from './compliment.service';

describe('ComplimentService', () => {
  let service: ComplimentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ComplimentService],
    }).compile();

    service = module.get<ComplimentService>(ComplimentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
