import { DataService } from './services/data.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/admin/admin.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { MatchesComponent } from './components/matches/matches.component';
import { EventComponent } from './components/event/event.component';
import { ScoreComponent } from './components/score/score.component';
import { NewsComponent } from './components/news/news.component';
import { NextMatchComponent } from './components/next-match/next-match.component';
import { VideoComponent } from './components/video/video.component';
import { VlogComponent } from './components/vlog/vlog.component';
import { ReadComponent } from './components/read/read.component';
import { InfoComponent } from './components/info/info.component';
import{FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AddMatchesComponent } from './components/add-matches/add-matches.component';
import { ScoresComponent } from './components/scores/scores.component';
import { MatchComponent } from './components/match/match.component';
import { PlayersComponent } from './components/players/players.component';
import { PlayerComponent } from './components/player/player.component';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api' ;
import { HttpClientModule } from '@angular/common/http';
import { DisplayMatchComponent } from './components/display-match/display-match.component';
import { DisplayPlayerComponent } from './components/display-player/display-player.component';
import { DisplayUsersComponent } from './components/display-users/display-users.component';
import { UserComponent } from './components/user/user.component';
import { EditComponent } from './components/edit/edit.component';
import { ReversePipe } from './pipes/reverse.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContactsComponent,
    LoginComponent,
    AdminComponent,
    SignupComponent,
    HomeComponent,
    MatchesComponent,
    EventComponent,
    ScoreComponent,
    NewsComponent,
    NextMatchComponent,
    VideoComponent,
    VlogComponent,
    ReadComponent,
    InfoComponent,
    AddMatchesComponent,
    ScoresComponent,
    MatchComponent,
    PlayersComponent,
    PlayerComponent,
    DisplayMatchComponent,
    DisplayPlayerComponent,
    DisplayUsersComponent,
    UserComponent,
    EditComponent,
    ReversePipe,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule ,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(DataService)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
