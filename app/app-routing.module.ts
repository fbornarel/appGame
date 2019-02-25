import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListGamesComponent } from './list-games/list-games.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { DetailsGameComponent } from './details-game/details-game.component';
import { AddGameComponent } from './add-game/add-game.component';


const routes: Routes = [
  { path: 'games', component: ListGamesComponent  },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'users', component: ListUsersComponent},
  { path: 'details-game/:title', component: DetailsGameComponent},
  { path: 'addGame', component: AddGameComponent },
  { path: '', redirectTo: '/games', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
