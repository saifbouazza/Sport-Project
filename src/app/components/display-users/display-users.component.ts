import { UsersServicesService } from './../../services/users-services.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-display-users',
  templateUrl: './display-users.component.html',
  styleUrls: ['./display-users.component.css']
})
export class DisplayUsersComponent implements OnInit {
  id: number;
  users: any;
  constructor(private usersServicesService: UsersServicesService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.usersServicesService.getUserById(this.id).subscribe(
      x => {
        this.users = x;
      }
    )
  }
}
