import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-matches',
  templateUrl: './add-matches.component.html',
  styleUrls: ['./add-matches.component.css']
})
export class AddMatchesComponent implements OnInit {
match:any=[];
  constructor() { }

  ngOnInit(): void {

    this.match = [
  
    ];
  }
  validt() {
    
  }
  

}
