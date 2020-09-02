import { UsersServicesService } from './../../services/users-services.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  users: any;
  constructor(private usersService: UsersServicesService) { }

  ngOnInit(): void {
    this.usersService.getAllUsers().subscribe(

      data => {
        this.users = data;
      }
    )
  }
  

}