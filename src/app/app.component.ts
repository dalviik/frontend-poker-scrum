import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('myAudio') myAudio: ElementRef;
  title = 'pokerScrum';
  statusAudio = false;
  mute() {
    this.myAudio.nativeElement.pause();
    this.statusAudio = false;
  }
  unmute() {
    this.myAudio.nativeElement.play();
    this.statusAudio = true;
  }
}
