import { chessBoardInterface } from "../chessboard.interface";
import { PlayerInterface } from "./player/player.interface";

export interface GameInterface{
    id:string;
    chessBoard:chessBoardInterface
    player1:PlayerInterface
    player2:PlayerInterface
    activePlayer:string;
    setActivePlayer():void;
}