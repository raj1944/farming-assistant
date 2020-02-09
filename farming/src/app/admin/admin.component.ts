import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../app-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  p1;
  check;
  valbutton = "save";
  constructor(private router:Router) {
  }
  ngOnInit() {
  }

  onSave(data){
// Checking for blank fields.
    if(data.uname =='admin' && data.pass =='admin123'){
      localStorage.setItem('token', "admin")  
      this.router.navigate(['/states'])
    }
    else
    {
        alert("wrong information");
    }
}
}
