import { Test, TestingModule } from '@nestjs/testing';
import { ChessBoardService } from './chess-board.service';

describe('ChessBoardService', () => {
  let service: ChessBoardService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChessBoardService],
    }).compile();

    service = module.get<ChessBoardService>(ChessBoardService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
