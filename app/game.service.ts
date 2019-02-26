import { Injectable } from '@angular/core';
import { Observable, of , BehaviorSubject} from 'rxjs';


import { Game } from './Game';
import { GAMESLIST } from './gamesList';

@Injectable({
    providedIn: 'root'
})

export class GameService{

    public games = new BehaviorSubject(GAMESLIST);
      
    constructor() { }

    public getGames(){
        return this.games.getValue();    
    }

    getGame(title: string): Observable<Game>{
        return of(GAMESLIST.find(game => game.title === title));
      }

    public add(game:Game){
        this.games.getValue().push(game);
    }

    

    

}