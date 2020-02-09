import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';
import * as jwt_decode from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class AdminguardGuard implements CanActivate {
  constructor(private authservice: AuthService,
    private router: Router) { }
  
  canActivate(): boolean {
    console.log("canactivate")
    if (this.authservice.loggedIn()) {
      return true
    }
    else {
      this.router.navigate(['/adminlogin'])
      return false
    }
  }
}
