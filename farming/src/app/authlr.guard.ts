import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import * as jwt_decode from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class AuthlrGuard implements CanActivate {
  
  constructor(private authservice: AuthService,
    private router: Router) { }
  
  canActivate(): boolean {
    console.log("canactivate")
    if (this.authservice.loggedIn()) {
      console.log(this.router.url)
      const t=jwt_decode(localStorage.getItem('token'));
      this.router.navigate(['/'+t.type])
      return false
    }
    else {
      return true
    }
  }
  
}
