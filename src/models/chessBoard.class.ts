import { chessBoardInterface } from "./chessboard.interface";
import { Field } from "./field.class";
import { Row } from "./row.class";
import { ChessPiece } from "./chessPiece.class";
import { fieldInterface } from "./field.interface";
import { Pawn } from "./chesspieces/pawn.class";
import { Knight } from "./chesspieces/knight.class";
import { Bishop } from "./chesspieces/bishop.class";
import { Rook } from "./chesspieces/rook.class";
import { Queen } from "./chesspieces/queen.class";
import { King } from "./chesspieces/king.class";
import { chessPieceInterface } from "./chesspiece.interface";

export class ChessBoard implements chessBoardInterface{
    rows;
    allFields:fieldInterface[] = []
    allPieces: chessPieceInterface[] = []
    takenPieces=[]
    constructor(){

        this.rows = [new Row([]),new Row([]),new Row([]),new Row([]),new Row([]),new Row([]),new Row([]),new Row([])]
        this.rows.forEach((row,index)=>{
            
            for(let i =0;i<8;i++)
            row.fields.push(new Field(true))

            if(index === 1 || index === 6){
                row.fields.forEach(field=> field.setPiece(new Pawn()))
            }
            if(index === 0){
                row.fields[0].setPiece(new Rook()),
                row.fields[1].setPiece(new Knight()),
                row.fields[2].setPiece(new Bishop()),
                row.fields[4].setPiece(new Queen()),
                row.fields[3].setPiece(new King()),
                row.fields[5].setPiece(new Bishop()),
                row.fields[6].setPiece(new Knight()),
                row.fields[7].setPiece(new Rook())
            }
            if(index === 7){
                row.fields[7].setPiece(new Rook()),
                row.fields[6].setPiece(new Knight()),
                row.fields[5].setPiece(new Bishop()),
                row.fields[3].setPiece(new Queen()),
                row.fields[4].setPiece(new King()),
                row.fields[2].setPiece(new Bishop()),
                row.fields[1].setPiece(new Knight()),
                row.fields[0].setPiece(new Rook())


            }
        })
        this.rows.forEach((row)=> row.fields.forEach((field)=> this.allFields[`${field.id-1}`]=field))
        console.log("allfields",this.allFields)

    }
}