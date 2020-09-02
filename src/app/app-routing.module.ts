import { EditComponent } from './components/edit/edit.component';
import { DisplayUsersComponent } from './components/display-users/display-users.component';
import { DisplayPlayerComponent } from './components/display-player/display-player.component';
import { DisplayMatchComponent } from './components/display-match/display-match.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { MatchesComponent } from './components/matches/matches.component';
import { AddMatchesComponent } from './components/add-matches/add-matches.component';
import { MatchComponent } from './components/match/match.component';
import { PlayersComponent } from './components/players/players.component';
import { PlayerComponent } from './components/player/player.component';
import { AdminComponent } from './components/admin/admin.component';

const routes: Routes = [
  {path : '' , component: HomeComponent},
{path : 'contact' , component: ContactsComponent},
{path : 'login' , component: LoginComponent},
{path : 'signup' , component: SignupComponent},
{path : 'matches' , component: MatchesComponent},
{path : 'add-matches' , component: AddMatchesComponent},
{path : 'matche' , component: MatchComponent},
{path : 'players' , component: PlayersComponent},
{path : 'player' , component: PlayerComponent},
{path : 'displaymatch/:id' , component: DisplayMatchComponent},
{path : 'displayplayer/:id' , component: DisplayPlayerComponent},
{path : 'displayusers/:id' , component: DisplayUsersComponent},
{path : 'admin' , component: AdminComponent},
{path : 'edit/:id' , component: EditComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
