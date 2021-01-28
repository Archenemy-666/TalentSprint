import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SmallScaleService } from '../small-scale.service';

@Component({
  selector: 'app-small-scale-login',
  templateUrl: './small-scale-login.component.html',
  styleUrls: ['./small-scale-login.component.css']
})
export class SmallScaleLoginComponent implements OnInit {
  smallScale:any;
  static smallName : any;
  constructor(public toastr:ToastrService , public router:Router ,public smallScaleService:SmallScaleService) {

  }

  ngOnInit(): void {
  }
  async SubmitSmallScaleDetails(smallScaleLoginForm: any){
    await this.smallScaleService.smallScaleLoginAuthentication(smallScaleLoginForm.smallScaleId,smallScaleLoginForm.password).toPromise().then((data:any) =>{this.smallScale=data; console.log(data); });
      if(this.smallScale != null){
        SmallScaleLoginComponent.smallName = this.smallScale.smallScaleName ;
        this.toastr.success('Logged In Successfully','Login SmallScale');
        this.router.navigate(['smallScaleHome']);
      
      }
      else{
        this.toastr.error('login unseccessful','Login Smallscale');
      }
      
  }

}
