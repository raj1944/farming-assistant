import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-farmer',
  templateUrl: './farmer.component.html',
  styleUrls: ['./farmer.component.css']
})
export class FarmerComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  addquestion(){
    this.router.navigate(['addquestion'], { relativeTo: this.route });
  }

  showanswer(){
    this.router.navigate(['showanswer'],{relativeTo: this.route})
  }

  addproduct(){
    this.router.navigate(['addproduct'],{relativeTo: this.route})
  }

  showproduct(){
    this.router.navigate(['showproduct'],{relativeTo: this.route})
  }

  showsuggetion(){
    this.router.navigate(['showsuggetion'],{relativeTo: this.route})
  }
}
