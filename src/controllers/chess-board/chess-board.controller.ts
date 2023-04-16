import { Controller, Get, Body, Post, Req, Inject } from '@nestjs/common';
import { ChessBoardService } from './chess-board.service';
import { SessionService } from 'src/services/session/session.service';

@Controller('chessboard')
export class ChessBoardController {
    @Inject(SessionService) sesh:SessionService
constructor(private boardService:ChessBoardService){}
    @Post()
    setChessBoard(@Body() body:any,@Req() req:any){
        //console.dir(req.body)
       // console.dir(req.body.allFields[0].currentPiece)
        console.log("board received from client")
        this.boardService.addToBoard(req.body)
        this.boardService.getBoard()
        console.log(this.sesh.games[0].activePlayer)
        this.sesh.games[0].setActivePlayer()
        console.log(this.sesh.games[0].activePlayer)
      //  return this.boardService.board

        return {board:this.boardService.board,activePlayer:this.sesh.games[0].activePlayer}
    }
    @Get()
    greet(){
        console.log("board dispatched")

        return {board:this.boardService.board,activePlayer:this.sesh.games[0].activePlayer}
    }
}
