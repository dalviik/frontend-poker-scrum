import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  modalCreateRoom: boolean = false;
  modalSearchRoom: boolean = true;


  formSend = false;
  codeRoom = '';
  playerName = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  createRoom() {

  }

  searchRoom() {
    this.formSend = true;
if(this.codeRoom.length<1){
  return;
}

    Swal.fire({
      icon: 'success',
      title: 'SALA ENCONTRADA',
      text: 'No olvides tu cara de poker ;)'
    }).then((resp) => {
      this.router.navigate(['/game', 1]);
    })
  }

  copyCode() {

  }


}
