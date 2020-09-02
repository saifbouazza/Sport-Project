import { ActivatedRoute, Router } from '@angular/router';
import { UsersServicesService } from './../../services/users-services.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  user:any;
  id:number;
  userForm:FormGroup;
  constructor(private usersServicesService: UsersServicesService , private activatedRoute: ActivatedRoute , private router: Router,
    private formBuilder: FormBuilder ) { }

  ngOnInit(): void {
    this.userForm =  this.formBuilder.group({
      firstName: [''],
      lastName: ['']
    });
    this.id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.usersServicesService.getUserById(this.id).subscribe(
      x => {
        console.log('X', x);
        this.user = x;
      }
    )

  }
  validateEdit(){   
    this.usersServicesService.editUsers(this.user).subscribe(
      () => {
        this.router.navigate(['admin']);
      }
    )

  }

}
