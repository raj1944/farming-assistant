import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import * as jwt_decode from "jwt-decode";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  p1;
  check;
  valbutton = "save";
  constructor(private p: AuthService, private router: Router) { }

  ngOnInit() {
  	       this.check=false;
          let t=jwt_decode(localStorage.getItem('token'));
          this.p.getuser(t.phnno).subscribe(data => this.p1 = data);

  }
edit = function (p1) {
 this.check=true;
    this.id = p1._id;
    this.uname = p1.uname;
    this.phnno =p1.phnno;
  this.pass =p1.pass
  this.state =p1.state
  this.mail =p1.mail

  }
onedit = function (p1) {
    
    this.p.useredit(p1).subscribe(data => this.p1 = data);

  }


}
