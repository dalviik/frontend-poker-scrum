import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  constructor() { }
  players = ['Erick','Stan','Kyle','Kenny'];
  modalFiboCards = false;
  fiboCards = [0,1,1,2,3,5,7,8,13,21,34,55,89,144,233,377];
  ngOnInit(): void {
  }

}
