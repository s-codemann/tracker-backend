import { ChessPiece } from "../chessPiece.class";

export class Knight extends ChessPiece{
    constructor(){
        super("knight")
        this.directions = {
            frontLeft: -17,
            frontRight: -15,
            backRight: 17,
            backLeft: 15,
            leftTop: -10,
            leftBottom: 6,
            rightTop: -6,
            rightBottom: 10,
        }

        
        this.moveLimit = true;
        
       
    }
}