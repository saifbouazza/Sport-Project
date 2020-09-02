import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  news:any;
  constructor() { }

  ngOnInit(): void {
    this.news = [
      { id: 1, name: 'Neymar', image: ' assets/images/img_1.jpg', date: "12 /03/2020" },
      { id: 2, name: 'messi', image: ' assets/images/img_1.jpg', date: "12/04/2020"},
      { id: 3, name: 'cristiano', image: ' assets/images/img_1.jpg', date:"12/05/2020" },



    ];

  

  }

  checkEmail(email) {
    let regExp = new RegExp('^[0-9a-z._-]+@{1}[0-9a-z.-]{2,}[.]{1}[a-z]{2,5}$', 'i');
    return regExp.test(email);
  }







}

