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
  modelNamePlayer = false;
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
    try {
      if (localStorage.getItem('playerName'))
        this.playerName = localStorage.getItem('playerName');
      if (localStorage.getItem('idPlayer'))
        this.idPlayer = localStorage.getItem('idPlayer');
    } catch (error) {

    }
    if (!this.playerName) {
      this.modelNamePlayer = true;
    }



    this.refresh();
  }

  refresh() {
    this.avgQuestion = 0;
    this.players = [];

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
    let playerObj = {
      score: this.voteValue
    }
    this._playerService.actualizarVoto(this.idPlayer, playerObj).
      subscribe((resp: any) => {
        this.modalFiboCards = false;
        this.refresh();
      })

  }
  registerUser() {
    let playerObj = {
      idRoom: this.codeRoom,
      playerName: this.playerName
    }

    this._playerService.ingresarRoom(playerObj).subscribe((resp: any) => {
      localStorage.setItem('playerName', this.playerName);
      localStorage.setItem('idPlayer', resp.player.idPlayer);

      this.modelNamePlayer = false;
      this.refresh();
    })
  }

}
