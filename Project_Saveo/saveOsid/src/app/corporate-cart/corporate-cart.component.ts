import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { CorporateLoginComponent } from '../corporate-login/corporate-login.component';

@Component({
  selector: 'app-corporate-cart',
  templateUrl: './corporate-cart.component.html',
  styleUrls: ['./corporate-cart.component.css']
})
export class CorporateCartComponent implements OnInit {
  carts:any;
  corporateName:any;
  constructor(public service:CartService) { }

  ngOnInit(): void {
    this.corporateName = CorporateLoginComponent.corporateName;
    this.service.getByCorporateName(this.corporateName).subscribe((data:any) => {this.carts=data ; console.log(data);});
  }

}
