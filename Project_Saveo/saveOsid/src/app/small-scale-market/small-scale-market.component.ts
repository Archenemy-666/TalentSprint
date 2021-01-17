import { Component, OnInit } from '@angular/core';
import { MarketService } from '../market.service';

@Component({
  selector: 'app-small-scale-market',
  templateUrl: './small-scale-market.component.html',
  styleUrls: ['./small-scale-market.component.css']
})
export class SmallScaleMarketComponent implements OnInit {
  requirements:any
  constructor(public service:MarketService) { }

  ngOnInit(): void {
    this.service.getAllRequirements().subscribe((data:any) => {this.requirements=data;  console.log(data);});
  }

}
