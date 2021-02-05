import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../../services/player.service';
import { RoomService } from '../../services/room.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-player-game',
  templateUrl: './player-game.component.html',
  styleUrls: ['./player-game.component.css']
})
export class PlayerGameComponent implements OnInit {


  codeRoom = '';

  idPlayer = '';
  playerName = '';

  players = [];
  modalFiboCards = false;
  fiboCards = [1, 2, 3, 5, 7, 8, 13, 21, 34, 55, 89, 144, 233, 377];

  bannerQuestion = '-';
  avgQuestion = 0;
  voteValue = 0;

  constructor(private _roomService: RoomService,
    private _playerService: PlayerService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {

    activatedRoute.params.forEach((params: Params) => {
      if (params.id !== undefined) {
        this.codeRoom = params.id;
      }
    });

  }

  ngOnInit(): void {
    this.playerName = localStorage.getItem('playerName');
    this.idPlayer = localStorage.getItem('idPlayer');
    this.refresh();
  }

  refresh() {
    this.avgQuestion = 0;
    this.players = [];
    console.log('El codigo de la room es ' + this.codeRoom);



    this._roomService.obtenerPlayers(this.codeRoom)
      .subscribe((resp: any) => {

        this.bannerQuestion = resp.question;

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

  vote() {
    this.modalFiboCards = false;
    console.log('LLega ' + this.voteValue);
    let playerObj = {
      score: this.voteValue
    }
    this._playerService.actualizarVoto(this.idPlayer, playerObj).
      subscribe((resp: any) => {
        console.log('Se ha actualizado correctamente ');
        console.log(resp);
        this.refresh();
      })
  }

}
