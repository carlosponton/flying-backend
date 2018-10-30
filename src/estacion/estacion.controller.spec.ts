import { Test, TestingModule } from '@nestjs/testing';
import { EstacionController } from './estacion.controller';

describe('Estacion Controller', () => {
  let module: TestingModule;
  // @ts-ignore
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [EstacionController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: EstacionController = module.get<EstacionController>(EstacionController);
    expect(controller).toBeDefined();
  });
});
