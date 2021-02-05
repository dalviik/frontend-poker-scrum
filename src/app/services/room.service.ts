import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../config/config';
@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(private http: HttpClient) { }

  createRoom(room: Object) {
    let url = URL_SERVICIOS + '/room';
    return this.http.post(url, room);
  }

  getRoom(idRoom: string) {
    let url = URL_SERVICIOS + '/room/' + idRoom;
    return this.http.get(url);
  }

  updateQuestion(idRoom: string, room: Object) {
    let url = URL_SERVICIOS + '/room/updateQuestion/' + idRoom;
    return this.http.put(url, room);
  }

}
