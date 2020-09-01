import { Test, TestingModule } from '@nestjs/testing';
import { UserModuleController } from './user-module.controller';

describe('AdressesModule Controller', () => {
  let controller: UserModuleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserModuleController],
    }).compile();

    controller = module.get<UserModuleController>(UserModuleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
