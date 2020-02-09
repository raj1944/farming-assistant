import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor(private http: HttpClient,private router: Router) { }

  addquestion(data){
    return this.http.post('http://localhost:3000/addquestion',data)
  }

  getquestion(){
    return this.http.get('http://localhost:3000/getquestion')
  }

  postanswer(data){
    return this.http.post('http://localhost:3000/postanswer',data)
  }

  getquestionbyuid(id){
    return this.http.post('http://localhost:3000/getquestionbyuid',{'id':id})
  }

  getanswerbyqid(id){
    return this.http.post('http://localhost:3000/getanswerbyqid',{'id':id})
  }

  addproduct(data){
    return this.http.post('http://localhost:3000/addproduct',data)
  }

  getproduct(){
    return this.http.get('http://localhost:3000/getproduct')
  }

  getproductbyuid(id){
    return this.http.post('http://localhost:3000/getproductbyuid',{'id':id})
  }

  deleteproductbyid(id){
    return this.http.post('http://localhost:3000/deleteproductbyid',{'id':id})
  }

  addsuggetion(data){
    return this.http.post('http://localhost:3000/addsuggetion',data)
  }

  getsuggetion(){
    return this.http.get('http://localhost:3000/getsuggetion')
  }

  getuserdata(){
    return this.http.get('http://localhost:3000/getData')
  }

  
}
