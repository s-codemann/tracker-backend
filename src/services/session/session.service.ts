import { Injectable } from '@nestjs/common';
import { Game } from 'src/models/game/game.class';
import { GameInterface } from 'src/models/game/game.interface';
import { Player } from 'src/models/game/player/player.class';
@Injectable()
export class SessionService {
    constructor(){this.createSession()}
games:GameInterface[] = [];
    createSession(){
        let game = new Game()
        //this.games[""+game.id] = game
        this.games[0] = game
        
//        return this.games[""+game.id]
        return this.games[0]
        
    }
}
