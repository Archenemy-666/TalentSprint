import { Component, OnInit } from '@angular/core';
import { MarketService } from '../market.service';
import { SmallScaleLoginComponent } from '../small-scale-login/small-scale-login.component';

@Component({
  selector: 'app-request-form',
  templateUrl: './request-form.component.html',
  styleUrls: ['./request-form.component.css']
})
export class RequestFormComponent implements OnInit {
  smallScaleName:any;
  constructor(public service:MarketService) { }

  ngOnInit(): any {
    this.smallScaleName = SmallScaleLoginComponent.smallName ;
  }

  SubmitSmallScaleRequest(smallScaleRequestForm:any):any{

    // write tomorrow attach sprin and service methods 
    this.service.registerSmallScaleReq(smallScaleRequestForm).subscribe((result:any) => console.log(result));
  }

}
