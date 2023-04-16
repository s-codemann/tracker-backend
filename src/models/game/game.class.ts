import { ChessBoard } from "../chessBoard.class";
import { GameInterface } from "./game.interface";
import { Player } from "./player/player.class";

export class Game implements GameInterface{
    id=""
chessBoard= new ChessBoard()
player1= new Player()
player2= new Player()
activePlayer = "white"
    constructor(){
        let alphabet= "abcdefghijklmnoqrstuvwxyz"
        alphabet = alphabet + alphabet.toUpperCase();
        for(let i=0;i<10;i++){
            this.id += alphabet[Math.floor(Math.random()*alphabet.length)]
        }
    }
    setActivePlayer(){
        this.activePlayer = this.activePlayer === "white"?"black":"white";
    }
}