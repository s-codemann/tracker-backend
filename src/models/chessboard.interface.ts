import { chessPieceInterface } from "./chesspiece.interface"
import { fieldInterface } from "./field.interface"
import { rowInterface } from "./row.interface"
export interface chessBoardInterface{
rows:rowInterface[],
allFields:fieldInterface[],
allPieces:chessPieceInterface[],
takenPieces:chessPieceInterface[]
}