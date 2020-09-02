import { MatchServicesService } from './../../services/match-services.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {

  matches: any;
  constructor(private matchService: MatchServicesService) { }

  ngOnInit() {
    this.matchService.getAllMatches().subscribe(

   data => {
     this.matches = data;
   }
    )
  }
  UpdateMatches(matches:any){
    this.matches = matches
  };
}