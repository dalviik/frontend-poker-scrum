import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  codeRoom = '';
  players = ['Erick', 'Stan', 'Kyle', 'Kenny'];
  modalFiboCards = false;
  fiboCards = [0, 1, 1, 2, 3, 5, 7, 8, 13, 21, 34, 55, 89, 144, 233, 377];
  question = '';
  bannerQuestion = '-';
  avgQuestion = 0;
  voteValue = 0;

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router) {

    activatedRoute.params.forEach((params: Params) => {
      if (params.id !== undefined) {
        console.log('ID de params' + params.id);
        this.codeRoom = params.id;

      } else {
        // this.isLoading = false;
      }
    });

  }



  ngOnInit(): void {
  }

  refresh() {
    this.players = [];
    setTimeout(() => {
      this.players = ['Erick', 'Stan', 'Kyle', 'Kenny'];
    }, 500);
  }

  pickCard(vote: number) {
    this.modalFiboCards = false;
    this.voteValue = vote;
  }

}
