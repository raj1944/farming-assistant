import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { AppServiceService } from '../app-service.service';
import * as jwt_decode from "jwt-decode";
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-showanswer',
  templateUrl: './showanswer.component.html',
  styleUrls: ['./showanswer.component.css']
})
export class ShowanswerComponent implements OnInit {
  p1:any=[];
   p2=[];
   p3;
  constructor(private p:AppServiceService,private router:Router) {
    const t=jwt_decode(localStorage.getItem('token'));
    this.p.getquestionbyuid(t.phnno).subscribe(
      data =>{
        for(let x in data)
        {
          //console.log(data[x]._id)
          this.p.getanswerbyqid(data[x]._id).subscribe(
            data1 => {
              this.p3=data[x]
              console.log(data1)
              this.p3.answers=data1
              //console.log(this.p3)
              this.p1.push(this.p3)
            },
            err =>console.log(err)
          )
        }
      },
      err=>console.log(err)
      );
   }

  ngOnInit(){
    // const t=jwt_decode(localStorage.getItem('token'));
    // this.p.getquestionbyuid(t.phnno).subscribe(
    //   data =>{
    //     for(let x in data)
    //     {
    //       //console.log(data[x]._id)
    //       this.p.getanswerbyqid(data[x]._id).subscribe(
    //         data1 => {
    //           this.p3=data[x]
    //           console.log(data1)
    //           this.p3.answers=data1
    //           //console.log(this.p3)
    //           this.p1.push(this.p3)
    //         },
    //         err =>console.log(err)
    //       )
    //     }
    //   },
    //   err=>console.log(err)
    //   );
  }

}
