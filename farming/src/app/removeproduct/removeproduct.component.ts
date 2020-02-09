import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { AppServiceService } from '../app-service.service';
import * as jwt_decode from "jwt-decode";

@Component({
  selector: 'app-removeproduct',
  templateUrl: './removeproduct.component.html',
  styleUrls: ['./removeproduct.component.css']
})
export class RemoveproductComponent implements OnInit {
  p1;
  constructor(private p:AppServiceService,private router:Router) { }

  ngOnInit() {
    const t=jwt_decode(localStorage.getItem('token'));
    this.p.getproductbyuid(t.phnno).subscribe(data =>this.p1=data)
  }

  delete(id){
    this.p.deleteproductbyid(id)
      .subscribe(
        data => { 
          alert(data['data']); 
          this.ngOnInit(); 
        }, 
        err => console.log(err)
  )}

}
