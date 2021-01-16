import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CorporateServiceService } from '../corporate-service.service';

@Component({
  selector: 'app-corporate-register',
  templateUrl: './corporate-register.component.html',
  styleUrls: ['./corporate-register.component.css']
})
export class CorporateRegisterComponent implements OnInit {

  corporateHosp:any;
  constructor(public service :CorporateServiceService) {
    
   }

  ngOnInit(): void {
  }
  registerCorporate(corporateRegForm:any):any{
  
    console.log(corporateRegForm);

    this.service.registerCorporate(corporateRegForm).subscribe((result:any) => console.log(result));
  }

}
