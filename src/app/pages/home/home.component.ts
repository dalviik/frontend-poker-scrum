import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  modalNewGame: boolean = false;
  modalEnterGame: boolean = false;

  codigoSala = 0;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  newGame() {
    this.modalNewGame = true;
  }

  enterGame() {
    this.modalEnterGame = true;
  }

  searchTable() {
   
    
    Swal.fire({
      icon: 'success',
      title: 'SALA ENCONTRADA',
      text: 'No olvides tu cara de poker ;)'
    }).then((resp) => {
      this.router.navigate(['/game',1]);
    })
  }


}
