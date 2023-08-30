import { PlayerInterface } from "./player.interface";

export class Player implements PlayerInterface{
    color="white"
    constructor(public id:string){
        /* let alphabet= "abcdefghijklmnoqrstuvwxyz"
        alphabet = alphabet + alphabet.toUpperCase();
        for(let i=0;i<10;i++){
            this.id += alphabet[Math.floor(Math.random()*alphabet.length)]
        }
        console.log(this.id) */
    }

}