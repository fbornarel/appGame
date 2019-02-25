import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Game } from './Game';
import { GAMESLIST } from './gamesList';

@Injectable({
    providedIn: 'root'
})

export class GameService{

    public games = GAMESLIST;
   
    constructor() { }

    public getGames(): Observable<Game[]>{
        return of(GAMESLIST); 
    }

    getGame(title: string): Observable<Game>{
        return of(GAMESLIST.find(game => game.title === title));
      }

    public add(game:Game){
        this.games.push(game);
    }

    

    

}