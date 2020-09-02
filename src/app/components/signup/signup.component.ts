import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  userForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    this.userForm = this.fb.group({
      firstName: ['', [Validators.minLength(5), Validators.required]],

      lastName: ['', [Validators.minLength(5), Validators.required]],

      email: ['', [Validators.email, Validators.required]],

      pwd: ['', [Validators.required, Validators.minLength(8)]],

      confirmPwd: ['', [Validators.minLength(8), Validators.required]],

      phone: ['', [Validators.minLength(8),Validators.required]]


    });
  }
  signUp() {
    alert("buttom clicked");
  }


}
