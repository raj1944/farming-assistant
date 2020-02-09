import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormsModule, } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import * as jwt_decode from "jwt-decode";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  p1;

  valbutton = "Register";
  constructor(private authservice: AuthService, private router: Router) {
  }
  ngOnInit() {

  }

  onSave = function (data, isValid: boolean) {
    this.authservice.getuserbyid(data)
      .subscribe(
        res => {
          if (res['token'] != null) {
            alert("This User Registered")
          }
          else {
            this.authservice.signup(data)
              .subscribe(
                res => {
                  console.log("SignUp Done..!!")
                  localStorage.setItem('token', res['token'])
                  const t = jwt_decode(localStorage.getItem('token'));
                  this.router.navigate(['/' + t.type])
                },
                err => console.log(err)
              )
          }
        },
        err => console.log(err))

  }

}
