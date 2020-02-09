import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { AppServiceService } from '../../app-service.service';
import {AuthService} from '../../auth.service';
import * as jwt_decode from "jwt-decode";

@Component({
  selector: 'app-states',
  templateUrl: './states.component.html',
  styleUrls: ['./states.component.css']
})
export class StatesComponent implements OnInit {

  constructor(private p:AppServiceService,private router:Router,private authservice: AuthService) { }
  p1;
  ngOnInit() {
    this.p.getuserdata().subscribe(data => this.p1=data)
  }

  logout() {
    this.authservice.logoutUser();
  }

}
