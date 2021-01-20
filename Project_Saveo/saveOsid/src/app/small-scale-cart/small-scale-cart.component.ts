import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { SmallScaleLoginComponent } from '../small-scale-login/small-scale-login.component';

@Component({
  selector: 'app-small-scale-cart',
  templateUrl: './small-scale-cart.component.html',
  styleUrls: ['./small-scale-cart.component.css']
})
export class SmallScaleCartComponent implements OnInit {
  carts:any;
  smallScaleName:any;
  constructor(public service:CartService) { }

  ngOnInit(): void {
    this.smallScaleName = SmallScaleLoginComponent.smallName;
    this.service.getBySmallScaleName(this.smallScaleName).subscribe((data:any) => {this.carts=data ; console.log(data);});

  }

}
