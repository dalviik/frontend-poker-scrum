import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../config/config';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private http: HttpClient) { }

  enterRoom(player: Object) {
    let url = URL_SERVICIOS + '/player/enterRoom/';
    return this.http.post(url, player);
  }

  updateScore(idPlayer: string, player: Object) {
    let url = URL_SERVICIOS + '/player/updateScore/' + idPlayer;
    return this.http.put(url, player);
  }
}

