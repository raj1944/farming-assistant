import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { AppServiceService } from '../app-service.service';
import * as jwt_decode from "jwt-decode";

@Component({
  selector: 'app-showquestion',
  templateUrl: './showquestion.component.html',
  styleUrls: ['./showquestion.component.css']
})
export class ShowquestionComponent implements OnInit {
  id1;
  p1;
  constructor(private p:AppServiceService,private router:Router) { 
    this.p.getquestion().subscribe(data => this.p1=data);
  }
  ngOnInit() {
    
  }

  post(data,id){
    const t=jwt_decode(localStorage.getItem('token'));
    data.qid=this.id1;
    data.uid=t.phnno;
    console.log(data)
    this.p.postanswer(data).subscribe(
      res => {
        console.log(res['data'])
        this.hide(id)
      },
      err => console.log(err)
    )
    data.answer=" ";
  }

  add(id){
    this.id1=id;
    id.check=true;
    this.ngOnInit()
  }

  hide(id){
    id.check=false;
    this.ngOnInit()
  }

}
