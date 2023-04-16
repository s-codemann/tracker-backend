import { chessBoardInterface } from "./chessboard.interface";
import { fieldInterface } from "./field.interface";

export interface chessboardStateInterface{
    active:boolean;
    chessBoard:chessBoardInterface;
}
// IMPLEMENT CLASS WITH DEFAULT VALUES OVERRIDE ONLY OCCUPIED FIELDS