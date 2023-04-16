import { ChessPiece } from "../chessPiece.class";

export class King extends ChessPiece{
    constructor(){
        super("king")
        this.moveLimit = true
    }
}