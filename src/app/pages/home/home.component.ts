import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { RoomService } from '../../services/room.service';
import { PlayerService } from '../../services/player.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  modalCreateRoom: boolean = false;
  modalSearchRoom: boolean = false;

  codeRoom = '';
  formSend = false;
  playerName = '';
  urlPlay = '';

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
  }

  createRoom() {
    this.modalCreateRoom = true;
    let roomObject = {};
    this._roomService.createRoom(roomObject).
      subscribe((resp: any) => {
        this.codeRoom = resp.room.idRoom;
        this.urlPlay = encodeURI(document.location.protocol + '//' + document.location.host + '/#/game/play/' + this.codeRoom);

      })


  }
  enterRoom() {
    if (this.codeRoom != '') {
      this.router.navigate(['/game/c/', this.codeRoom]);
    }
  }
  searchRoom() {
    this.formSend = true;
    if (this.playerName.length < 1) {
      return;
    }
    if (this.codeRoom.length < 1) {
      return;
    }
    let playerObj = {
      idRoom: this.codeRoom,
      playerName: this.playerName
    }
    this._playerService.enterRoom(playerObj)
      .subscribe((resp: any) => {

        localStorage.setItem('playerName', this.playerName);
        localStorage.setItem('idPlayer', resp.player.idPlayer);

        Swal.fire({
          icon: 'success',
          title: 'SALA ENCONTRADA',
          text: 'No olvides tu cara de poker ;)'
        }).then((resp) => {
          this.router.navigate(['/game/play', this.codeRoom]);
        })
      }, (err: any) => {
        Swal.fire({
          icon: 'error',
          title: 'NO SE ENCONTÓ LA SALA',
          text: ''
        })
      })


  }




}
