import { ChessBoard } from "../chessBoard.class";
import { GameInterface } from "./game.interface";
import { Player } from "./player/player.class";
import { PlayerInterface } from "./player/player.interface";

export class Game implements GameInterface{
    id=""
    player1: PlayerInterface;
    player2: PlayerInterface;
chessBoard= new ChessBoard()
activePlayer = "white"
    constructor(player1:string,player2:string){
        this.player1 = new Player(player1)
        this.player2 = new Player(player1)
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