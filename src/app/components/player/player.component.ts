import { PlayerServicesService } from './../../services/player-services.service';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  @Input() Player:any;
  constructor(private router: Router, private playerServicesService:PlayerServicesService) { }

  ngOnInit(): void {
  }
  displayPlayer(id: number) {
    this.router.navigate([`displayplayer/${id}`]);


  }
  deletePlayer(id: number) {

    this.playerServicesService.deletePlayer(id).subscribe (

      () => {
        alert('player');
      }

      )

  }

}
