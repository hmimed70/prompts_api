import { Test, TestingModule } from '@nestjs/testing';
import { PromptController } from './prompts.controller';

describe('PromptsController', () => {
  let controller: PromptController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PromptController],
    }).compile();

    controller = module.get<PromptController>(PromptController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
