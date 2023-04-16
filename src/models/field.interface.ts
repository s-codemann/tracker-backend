import { chessPieceInterface } from "./chesspiece.interface";
import { Field } from "./field.class"; 
export interface fieldInterface{
    id:number;
    isEmpty:boolean;
    currentPiece:chessPieceInterface | null
    imgLink?:string;
    isLegalTarget:boolean;
    selected:boolean
    setPiece(piece:chessPieceInterface):Field
    unsetPiece():Field
}