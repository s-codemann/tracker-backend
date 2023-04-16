import { Injectable } from '@nestjs/common';
import { ChessBoard } from 'src/models/chessBoard.class';
import { chessBoardInterface } from 'src/models/chessboard.interface';
import { ChessPiece } from 'src/models/chessPiece.class';
import { Rook } from 'src/models/chesspieces/rook.class';
import { Pawn } from 'src/models/chesspieces/pawn.class';
import { Queen } from 'src/models/chesspieces/queen.class';
import { Knight } from 'src/models/chesspieces/knight.class';
import { Bishop } from 'src/models/chesspieces/bishop.class';
import { King } from 'src/models/chesspieces/king.class';
import { chessPieceInterface } from 'src/models/chesspiece.interface';
import { fieldInterface } from 'src/models/field.interface';
import { SessionService } from 'src/services/session/session.service';

@Injectable()
export class ChessBoardService {
    board:chessBoardInterface;
    allPiecesInitial:any = []
    constructor(private sessionService:SessionService){this.board = new ChessBoard()
    this.board.allFields.forEach((element:fieldInterface) => {
        if(element.currentPiece){
            
            this.allPiecesInitial.push(element.currentPiece)
        }
    });
    }
    
     i =0;
    addToBoard(board:any){
        board = board as chessBoardInterface
        this.board = board
    }
    getBoard(){
        this.i++
       this.aiMove()
       // console.log(this.board, "heyy",this.i)
        return this.board
    }
    aiMove(){
       for(let i=0;i<this.board.allFields.length;i++){
            let foundFieldsWithPiece=0;
            const currentField = this.board.allFields[i];
            if(currentField.currentPiece){
                foundFieldsWithPiece++
            let currentPiece = currentField.currentPiece
/*             currentPiece.untouched = false

                switch(currentPiece.name){
                case "rook": currentPiece={...currentPiece,...new Rook()};Object.setPrototypeOf(currentPiece,Rook)
                break
                case "pawn": currentPiece={...currentPiece,...new Pawn()}; Object.setPrototypeOf(currentPiece,Pawn)
                break
                case "king": currentPiece ={...currentPiece,...new King()};Object.setPrototypeOf(currentPiece,King)
                break
                case "queen": currentPiece={...currentPiece, ...new Queen()};Object.setPrototypeOf(currentPiece,Queen)
                break
                case "bishop": currentPiece= {...currentPiece,...new Bishop()};Object.setPrototypeOf(currentPiece,Bishop)
                break
                case "knight": currentPiece = {...currentPiece,...new Knight()} ;Object.setPrototypeOf(currentPiece,Knight)
                break
            }
            let currentPieceProtoType = Object.getPrototypeOf(currentPiece)
            let newCurrentPiece = new currentPieceProtoType()
            console.log("curid",currentPiece.id,currentPiece.fraction,currentPiece.name)
            console.log("newcurid",newCurrentPiece.id,newCurrentPiece.fraction)
            newCurrentPiece.id = currentPiece.id-(foundFieldsWithPiece *4)//currentField.id - 1
            console.log("newcurid",newCurrentPiece.id,newCurrentPiece.fraction)
            newCurrentPiece.setColor(currentPiece.fraction)
            console.log("newcurid",newCurrentPiece.id,newCurrentPiece.fraction)
            newCurrentPiece.untouched = false

            newCurrentPiece.fraction = currentPiece.fraction
 */
                      //let currentFieldLegalMoves = newCurrentPiece.getLegalMoves(currentField.id,this.board)

                      let currentPieceRestored = this.allPiecesInitial.find((piece:chessPieceInterface)=> piece.id === currentPiece.id)
                      console.log(currentPieceRestored.id)
                      let currentFieldLegalMoves = currentPieceRestored.getLegalMoves(currentField.id,this.board)
            if(currentFieldLegalMoves.toString()){
                const targetField =this.board.allFields[currentFieldLegalMoves[Math.floor(currentFieldLegalMoves.length * Math.random())]-1]
              //  newCurrentPiece = {...newCurrentPiece,...currentPiece}
                currentField.currentPiece.untouched = false
                targetField.currentPiece = currentField.currentPiece
                console.log("service",currentFieldLegalMoves,currentField.currentPiece.fraction,targetField.currentPiece.fraction)
                targetField.isEmpty = false;
                currentField.currentPiece = null;
                currentField.isEmpty = true;
                i = this.board.allFields.length
            }
       } }
    }
}
