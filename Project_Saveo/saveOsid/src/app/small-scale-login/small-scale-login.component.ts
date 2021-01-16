import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SmallScaleService } from '../small-scale.service';

@Component({
  selector: 'app-small-scale-login',
  templateUrl: './small-scale-login.component.html',
  styleUrls: ['./small-scale-login.component.css']
})
export class SmallScaleLoginComponent implements OnInit {
  smallScale:any;
  static smallName : any;
  constructor(public router:Router ,public smallScaleService:SmallScaleService) {

  }

  ngOnInit(): void {
  }
  async SubmitSmallScaleDetails(smallScaleLoginForm: any){
    await this.smallScaleService.smallScaleLoginAuthentication(smallScaleLoginForm.smallScaleId,smallScaleLoginForm.password).toPromise().then((data:any) =>{this.smallScale=data; console.log(data); });
      if(this.smallScale != null){
        SmallScaleLoginComponent.smallName = this.smallScale.smallScaleName ;
        this.router.navigate(['smallScaleHome']);
        return alert("successful");
      }
      return alert("unsuccessful");
  }

}
