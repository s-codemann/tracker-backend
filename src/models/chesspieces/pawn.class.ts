import { ChessPiece } from "../chessPiece.class";
import { fieldInterface } from "../field.interface";

export class Pawn extends ChessPiece{
    frontFieldEmpty:boolean=false;
    diagonalFrontLeftEnemy:boolean=true;
    diagonalFrontRightEnemy:boolean=true;
    /*
    dfle:diagonalFrontLeftEnemy
    dfre:diagonalFrontRightEnemy
    ffe:frontFieldEmpty
    twoffe:twofrontFieldsEmpty
    */ 
    getDirections(dfle:boolean,dfre:boolean,ffe:boolean,twoffe:boolean){
        const moves:number[]=[];
        if(this.fraction === "black"){
        if(dfle){
            moves.push(-9)
        }
        if(dfre){moves.push(-7)}
        if(ffe){moves.push(-8)}
        if(ffe &&twoffe && this.untouched){console.log(this.untouched),moves.push(-16)}
}
    else{
        if(dfle){
            moves.push(9)
        }
        if(dfre){moves.push(7)}
        if(ffe){moves.push(8)}
        if(twoffe && this.untouched && ffe){console.log(this.untouched),moves.push(16)}
    }
        return moves
    }
    constructor(){
        super("pawn")
        this.moveLimit = true;
        this.setDirections([])

        
    }
    
}