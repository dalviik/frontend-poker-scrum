import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  modalNewGame:boolean = false;
  modalEnterGame:boolean = true;
  
  codigoSala = 0;

  constructor() { }

  ngOnInit(): void {
  }

  newGame() {    
    this.modalNewGame = true;
  }

  enterGame() {
    this.modalEnterGame = true;
  }

  searchTable(){
    alert('Busqueda')
  }


}
