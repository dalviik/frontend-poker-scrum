import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { GameComponent } from './pages/game/game.component';
import { HomeComponent } from './pages/home/home.component';


// primeng
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    HomeComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    InputTextModule,
    DialogModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
