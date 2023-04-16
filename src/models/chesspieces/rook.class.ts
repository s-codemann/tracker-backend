import { ChessPiece } from "../chessPiece.class";

export class Rook extends ChessPiece{
    constructor(){
        super("rook")
        const ownDirections = ["straightForwards","straightBackwards","straightLeft","straightRight"]
        this.setDirections(ownDirections)
    }
}