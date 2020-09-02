import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  contact: any = {};
  constructor() { }

  ngOnInit(): void {
  }
  valider() {
    alert("button is clicked");
  }
}
