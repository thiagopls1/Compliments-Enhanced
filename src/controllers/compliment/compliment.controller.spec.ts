import { Test, TestingModule } from '@nestjs/testing';
import { ComplimentController } from './compliment.controller';

describe('ComplimentController', () => {
  let controller: ComplimentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ComplimentController],
    }).compile();

    controller = module.get<ComplimentController>(ComplimentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
