import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChessBoardController } from './controllers/chess-board/chess-board.controller';
import { ChessBoardService } from './controllers/chess-board/chess-board.service';
import { SessionService } from './services/session/session.service';
import { SessionController } from './controllers/session/session.controller';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [ AuthModule],
  controllers: [AppController,ChessBoardController, SessionController],
  providers: [AppService,ChessBoardService,SessionService],
})
export class AppModule {}
