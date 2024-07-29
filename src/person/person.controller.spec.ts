import { Test, TestingModule } from '@nestjs/testing';
import { PersonController } from './person.controller';

describe('PersonController', () => {
  let controller: PersonController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PersonController],
    }).compile();

  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});