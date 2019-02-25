import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Game } from '../game';
import { GameService } from '../game.service';

@Component({
  selector: 'app-details-game',
  templateUrl: './details-game.component.html',
  styleUrls: ['./details-game.component.css']
})
export class DetailsGameComponent implements OnInit {

  games : Game[];
  
  @Input() game: Game;

  constructor(
    private route: ActivatedRoute,
    private gameService: GameService
  ) { }

  ngOnInit(): void {
    this.getGame();
    this.games = this.gameService.games;
  }


  getGame(): void{
    const title = this.route.snapshot.paramMap.get('title');
    this.gameService.getGame(title)
    .subscribe(game => this.game = game);
  }

}
