import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MarketService } from '../market.service';
import { SmallScaleLoginComponent } from '../small-scale-login/small-scale-login.component';

@Component({
  selector: 'app-request-form',
  templateUrl: './request-form.component.html',
  styleUrls: ['./request-form.component.css']
})
export class RequestFormComponent implements OnInit {
  smallScaleName:any;
  constructor(public toastr:ToastrService ,public router:Router,public service:MarketService) { }

  ngOnInit(): any {
    this.smallScaleName = SmallScaleLoginComponent.smallName ;

  }

  SubmitSmallScaleRequest(smallScaleRequestForm:any):any{

    
    smallScaleRequestForm.smallScaleName = this.smallScaleName ;
    this.service.registerSmallScaleReq(smallScaleRequestForm).subscribe((result:any) => console.log(result));
    this.toastr.info('the request is added to market','requestForm');
    this.router.navigate(['smallScaleHome']);
    
  }

}
