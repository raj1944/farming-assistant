import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }
  addproduct(){
    this.router.navigate(['addproduct'], { relativeTo: this.route });
  }

  showproduct(){
    this.router.navigate(['showproduct'],{relativeTo: this.route})
  }

  removeproduct(){
    this.router.navigate(['removeproduct'],{relativeTo: this.route})
  }

}
