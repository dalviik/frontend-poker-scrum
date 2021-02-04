import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../config/config';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private http: HttpClient) { }

  ingresarRoom(player: Object) {
    let url = URL_SERVICIOS + '/player/';
    return this.http.post(url, player);
  }

  actualizarVoto(idPlayer: number, player: Object) {
    let url = URL_SERVICIOS + '/room/' + idPlayer;
    return this.http.post(url, player);
  }
}

