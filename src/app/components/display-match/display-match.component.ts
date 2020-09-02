import { MatchServicesService } from './../../services/match-services.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-display-match',
  templateUrl: './display-match.component.html',
  styleUrls: ['./display-match.component.css']
})
export class DisplayMatchComponent implements OnInit {

match:any;
  constructor(private matchService:MatchServicesService) { }

  ngOnInit(): void {
    this.matchService.getMatchById(2).subscribe(

      x => {
        this.match = x;
      }
    )
  }

}
