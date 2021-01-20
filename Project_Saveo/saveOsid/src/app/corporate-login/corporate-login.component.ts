import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CorporateServiceService } from '../corporate-service.service';

@Component({
  selector: 'app-corporate-login',
  templateUrl: './corporate-login.component.html',
  styleUrls: ['./corporate-login.component.css']
})
export class CorporateLoginComponent implements OnInit {
  static corporateName:any;
  corporate:any;

  constructor(public router:Router, public corporateService:CorporateServiceService) {

   }

  ngOnInit(): void {
  }
  async SubmitCorporateDetails(corporateLoginForm:any){
    await this.corporateService.corporateLoginAuthentication(corporateLoginForm.corporateId,corporateLoginForm.password).toPromise().then((data:any) =>{this.corporate=data; console.log(data); });
      if(this.corporate != null){
        CorporateLoginComponent.corporateName = this.corporate.corporateName ;
        this.router.navigate(['corporateHome']);
        //return alert("successful");
      }
      //return alert("unsuccessful");
  
  }
}
