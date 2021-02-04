import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player-game',
  templateUrl: './player-game.component.html',
  styleUrls: ['./player-game.component.css']
})
export class PlayerGameComponent implements OnInit {

  playerName = '';

  players = ['Erick', 'Stan', 'Kyle', 'Kenny'];
  modalFiboCards = false;
  fiboCards = [0, 1, 1, 2, 3, 5, 7, 8, 13, 21, 34, 55, 89, 144, 233, 377];
  question = '';
  bannerQuestion = '-';
  avgQuestion = 0;
  voteValue = 0;

  constructor() { }

  ngOnInit(): void {
    this.playerName = localStorage.getItem('playerName');
  }

  refresh (){
    this.players =[];
    setTimeout(() => {
      this.players = ['Erick', 'Stan', 'Kyle', 'Kenny'];
    }, 3000);
  }

  pickCard(vote: number) {
    this.modalFiboCards = false;
    this.voteValue = vote;
  }

}
