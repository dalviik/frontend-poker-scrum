import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Router, ActivatedRoute, Params } from '@angular/router';
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

  createRoom() {
    this.modalCreateRoom = true;
    this.codeRoom = 'ZXCV';

  }
  enterRoom() {
    this.router.navigate(['/game/c/', this.codeRoom]);
  }
  searchRoom() {
    this.formSend = true;
    if (this.codeRoom.length < 1) {
      return;
    }

    Swal.fire({
      icon: 'success',
      title: 'SALA ENCONTRADA',
      text: 'No olvides tu cara de poker ;)'
    }).then((resp) => {
      this.router.navigate(['/game/play', this.codeRoom]);
    })
  }

 


}
