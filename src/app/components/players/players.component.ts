import { PlayerServicesService } from './../../services/player-services.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  
  players: any;
  constructor(private playerService: PlayerServicesService) { }

  ngOnInit() {
    this.playerService.getAllPlayers().subscribe(

      data => {
        this.players = data;
      }
    )
  }

}