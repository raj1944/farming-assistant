import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { AppServiceService } from '../app-service.service';
import * as jwt_decode from "jwt-decode";

@Component({
  selector: 'app-addquestion',
  templateUrl: './addquestion.component.html',
  styleUrls: ['./addquestion.component.css']
})
export class AddquestionComponent implements OnInit {

  constructor(private p:AppServiceService,private router:Router) { }

  ngOnInit() {
  }
  
  add(data){
    const t=jwt_decode(localStorage.getItem('token'));
    data.uid=t.phnno;
    this.p.addquestion(data).subscribe(
      res =>{
        console.log(res['data'])
        this.router.navigate(['/farmer'])
      },
      err =>console.log(err)
    )
  }
}
