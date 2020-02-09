import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { AppServiceService } from '../app-service.service';
import * as jwt_decode from "jwt-decode";

@Component({
  selector: 'app-suggetion',
  templateUrl: './suggetion.component.html',
  styleUrls: ['./suggetion.component.css']
})
export class SuggetionComponent implements OnInit {

  constructor(private p:AppServiceService,private router:Router) { }

  ngOnInit() {
  }

  onSave(data){
    const t=jwt_decode(localStorage.getItem('token'));
    data.uid=t.phnno;
    data.name=t.name;
    this.p.addsuggetion(data).subscribe(
      res =>{
        console.log(res['data'])
        this.router.navigate(['/advisor'])
      },
      err =>console.log(err)
    )
  }

}
