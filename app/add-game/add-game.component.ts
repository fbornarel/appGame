import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { GameService } from '../game.service';

@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.css']
})
export class AddGameComponent implements OnInit {

  public addGameForm : FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private gameService : GameService,
    private router :Router
    ) { }

  ngOnInit() {
    this.addGameForm = this.formBuilder.group({
      'title' : [''],
      'img' : [''],
      'year': ['',[ Validators.maxLength(4)]],
      'platform' : [''],
      'comment' : [''],
      'note' : ['']
    })
  }

  addNote(value: number | null){
    if (!value) {
      return 0;
    }
    if (value >= 10) {
      return Math.round(value / 10);
    }
    return value;
  }

  public submitAddGame(){
    if(this.addGameForm.valid){
    this.gameService.add(this.addGameForm.value);
    this.router.navigate(['/games']);
    }
  }
}
