import { UsersServicesService } from './../../services/users-services.service';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() users: any;
  constructor(private router: Router, private usersServicesService: UsersServicesService) { }

  ngOnInit(): void {
  }
  displayUsers(id: number) {
    this.router.navigate([`displayusers/${id}`]);


  }
  deleteUsers(id: number) {

    this.usersServicesService.deleteUsers(id).subscribe(

      () => {
        this.usersServicesService.getAllUsers().subscribe (
          x => {
            this.users = x;
          }
        )
      }

    )

  }
  editUser(id: number){
    this.router.navigate([`edit/${id}`]);

  }
}