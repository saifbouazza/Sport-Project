import { PlayerServicesService } from './../../services/player-services.service';
import { MatchServicesService } from './../../services/match-services.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-player',
  templateUrl: './display-player.component.html',
  styleUrls: ['./display-player.component.css']
})
export class DisplayPlayerComponent implements OnInit {
  player:any;
  constructor(private playerService:PlayerServicesService) { }

  ngOnInit(): void {
    this.playerService.getPlayerById(2).subscribe(

      x => {
        this.player = x;
      }
    )
  }

}
