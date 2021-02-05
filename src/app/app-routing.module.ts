import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { GameComponent } from './pages/game/game.component';
import { HomeComponent } from './pages/home/home.component';
import { PlayerGameComponent } from './pages/player-game/player-game.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'game/c/:id', component: GameComponent },
  { path: 'game/play/:id', component: PlayerGameComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

const routerOptions: ExtraOptions = {
  useHash: true,
  scrollPositionRestoration: 'enabled',
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
