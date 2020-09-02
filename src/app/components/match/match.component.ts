import { MatchServicesService } from './../../services/match-services.service';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {
  @Input() data: any;
  @Output () newMatches : EventEmitter<any> = new EventEmitter();
  constructor(private router: Router, private MatchServicesService:MatchServicesService) { }

  ngOnInit(): void {
  }
  compare(a: number, b: number) {

    if (a > b) {
      return 'win';
    } else if (a < b) {
      return 'Loss';

    } else if (a == b) {
      return 'draw';
    }


  }
  display(id: number) {
    this.router.navigate([`displaymatch/${id}`]);


  }
  delete(id: number) {

    this.MatchServicesService.deleteMatch(id).subscribe (

      () => {
        alert('match deleted');
        this.MatchServicesService.getAllMatches().subscribe(
         missesMatches=> {
            this.newMatches.emit(missesMatches);

          }
        )
      }

      )

  }


}
