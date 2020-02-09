import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { AppServiceService } from '../app-service.service';
import * as jwt_decode from "jwt-decode";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private p:AppServiceService,private router:Router) { }

  ngOnInit() {
  }

  add(data){
    const t=jwt_decode(localStorage.getItem('token'));
    data.uid=t.phnno;
    this.p.addproduct(data).subscribe(
      res =>{
        console.log(res['data'])
        this.router.navigate(['/seller'])
      },
      err =>console.log(err)
    )
  }

}
