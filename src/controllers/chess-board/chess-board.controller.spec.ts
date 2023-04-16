import { Test, TestingModule } from '@nestjs/testing';
import { ChessBoardController } from './chess-board.controller';

describe('ChessBoardController', () => {
  let controller: ChessBoardController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChessBoardController],
    }).compile();

    controller = module.get<ChessBoardController>(ChessBoardController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
