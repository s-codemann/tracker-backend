import { ChessBoard } from "../chessBoard.class";
import { ChessPiece } from "../chessPiece.class";
import { chessBoardInterface } from "../chessboard.interface";

export class Bishop extends ChessPiece{
    constructor(){
        super("bishop")
        const theseDirections = ["topLeft","topRight","bottomLeft","bottomRight"];
        this.setDirections(theseDirections)
}
    
}