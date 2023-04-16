import { chessBoardInterface } from "./chessboard.interface";

export interface chessPieceInterface{
    name:string;
    id:number;
    imgLink:string;
    legalMoves:number[];
    untouched:boolean;
    fraction:string;
    isTaken:boolean;
    moveLimit:boolean;
    directions:{[key:string]:number}
    setColor(color:string):void,
    getLegalMoves(fieldID:number,board:chessBoardInterface):any[]
}