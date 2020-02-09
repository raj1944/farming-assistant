import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import { Router } from '@angular/router';
import * as jwt_decode from "jwt-decode";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  check;
 uname;
  constructor(private authservice: AuthService, private router: Router) { }

  ngOnInit() {
    this.check=this.authservice.loggedIn();
    console.log(this.check);
    if(this.check)
    {
      console.log("Hello");
      const t=jwt_decode(localStorage.getItem('token'));
      console.log(t.phnno);
      this.uname=t.name;
      //this.uname=jwt_decode(t)
    }
  }

  home(){
    if(this.authservice.loggedIn()){
      const t = jwt_decode(localStorage.getItem('token'));
      console.log(t)
      this.router.navigate(['/' + t.type])
    }
    else
    this.router.navigate([''])
  }

  logout() {
    this.authservice.logoutUser();
  }

}
