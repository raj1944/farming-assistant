import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { AppServiceService } from '../app-service.service';
import * as jwt_decode from "jwt-decode";

@Component({
  selector: 'app-showsuggetion',
  templateUrl: './showsuggetion.component.html',
  styleUrls: ['./showsuggetion.component.css']
})
export class ShowsuggetionComponent implements OnInit {

  constructor(private p:AppServiceService,private router:Router) { }
  p1;
  ngOnInit() {
    this.p.getsuggetion().subscribe(data => this.p1=data)
  }

}
