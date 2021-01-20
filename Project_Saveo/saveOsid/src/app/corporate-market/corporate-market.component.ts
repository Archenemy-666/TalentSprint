import { Component, OnInit } from '@angular/core';
import { CorporateLoginComponent } from '../corporate-login/corporate-login.component';
import { MarketService } from '../market.service';

@Component({
  selector: 'app-corporate-market',
  templateUrl: './corporate-market.component.html',
  styleUrls: ['./corporate-market.component.css']
})
export class CorporateMarketComponent implements OnInit {
  requirements:any;
  corporateName:any;

  constructor(public service:MarketService) { }

  ngOnInit(): void {
    this.service.getAllRequirements().subscribe((data:any) => {this.requirements=data;  console.log(data);});
  }

  addToCart(requirement:any):any{
    console.log(requirement);
    this.corporateName = CorporateLoginComponent.corporateName;
    requirement.corporateName = this.corporateName;
    this.service.addToCart(requirement).subscribe((data:any) => console.log(data));
  }

}