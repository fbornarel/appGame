import { Component, OnInit } from '@angular/core';

import { Game } from './../Game';
import { GAMESLIST } from './../gamesList';
import { GameService } from './../game.service';

@Component({
  selector: 'app-list-games',
  templateUrl: './list-games.component.html',
  styleUrls: ['./list-games.component.css']
})
export class ListGamesComponent implements OnInit {

  public games : Game[];
  public gameList = GAMESLIST;

  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.getGames();
    this.games = this.gameService.games;
  }

  getGames(): void{
    this.gameService.getGames()
    .subscribe(games => this.games = games);
  }

  upVote(){
    //dev the function 
    var note = this.gameList[0]['note'];
    var upNote = note+0.1;
    console.log(upNote);

  }

  downVote(){
    //dev the function
    var note = this.gameList[0]['note'];
    var upNote = note-0.1;
    console.log(upNote);
  }

  essai(){
    //error commit vscode....
    //Error
    //essai commit
  }
}
