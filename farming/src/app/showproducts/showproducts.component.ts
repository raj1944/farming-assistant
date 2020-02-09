import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { AppServiceService } from '../app-service.service';
import * as jwt_decode from "jwt-decode";

@Component({
  selector: 'app-showproducts',
  templateUrl: './showproducts.component.html',
  styleUrls: ['./showproducts.component.css']
})
export class ShowproductsComponent implements OnInit {
  p1;
  constructor(private p:AppServiceService,private router:Router) { }

  ngOnInit() {
    this.p.getproduct().subscribe(data => {this.p1=data})
  }

}
