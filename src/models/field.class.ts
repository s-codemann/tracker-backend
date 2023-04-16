import { ChessPiece } from "./chessPiece.class";
import { chessPieceInterface } from "./chesspiece.interface";
import { fieldInterface } from "./field.interface";

export class Field implements fieldInterface{
    id:number = 0;
    currentPiece:chessPieceInterface | null=null;
    isLegalTarget:boolean = false;
    selected=false;

    public setPiece(piece:chessPieceInterface){
        this.currentPiece = piece;
        this.isEmpty = false;
        return this 
    }
     public unsetPiece(){

        this.currentPiece = null;
        this.isEmpty = true;
        return this
    }
    static id = 0;
    static autoIncrement(){
    this.id++
    if(this.id===65){this.id = 1}
    }
    constructor(public isEmpty:boolean,public imgLink?:string){
        this.setPiece= this.setPiece
        this.unsetPiece= this.unsetPiece
        Field.autoIncrement()
        this.id = Field.id;

        switch(this.id){

        }

    }
}