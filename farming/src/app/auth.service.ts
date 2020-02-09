import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,private router: Router) { }

  signup(user)
  {
    return this.http.post('http://localhost:3000/signup',user)
  }

  login(user){
    return this.http.post('http://localhost:3000/login',user)

  }

  loggedIn(){
    console.log("loggedIn")
    if(localStorage.getItem('token')==null)
    {
      return false
    }
    else
      return true
  }

  logoutUser() {
    localStorage.removeItem('token')
    this.router.navigate([''])
  }

  getuserbyid(user){
    return this.http.post('http://localhost:3000/getuserbyid',user)

  }

  getuser(data){
    return this.http.post('http://localhost:3000/getuser',{'phnno':data})
  }

  useredit(user){
    return this.http.post('http://localhost:3000/useredit',user)

  }
}
