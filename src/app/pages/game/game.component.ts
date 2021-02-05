import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { RoomService } from '../../services/room.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  codeRoom = '';
  players = [];
  modalFiboCards = false;
  fiboCards = [0, 1, 1, 2, 3, 5, 7, 8, 13, 21, 34, 55, 89, 144, 233, 377];
  question = '';
  bannerQuestion = '-';
  avgQuestion = 110;


  constructor(private _roomService: RoomService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {

    activatedRoute.params.forEach((params: Params) => {
      if (params.id !== undefined) {
        this.codeRoom = params.id;
      }
    });
  }

  ngOnInit(): void {
    this.refresh();
  }

  setQuestion() {
    this.bannerQuestion = this.question;

    let roomObject = {
      question: this.question
    }

    this._roomService.actualizarPregunta(this.codeRoom, roomObject)
      .subscribe((resp: any) => {
        console.log('Respuesta de actualizar pregunta');
        console.log(resp);
      })

  }

  refresh() {

    this.avgQuestion = 0;
    this.players = [];


    this._roomService.obtenerPlayers(this.codeRoom)
      .subscribe((resp: any) => {

        this.players = resp.players;
        if (this.players.length < 1) {
          return;
        }
        for (const player of this.players) {
          this.avgQuestion += player.score;
        }

        this.avgQuestion = this.avgQuestion / this.players.length;

      })

  }

}
