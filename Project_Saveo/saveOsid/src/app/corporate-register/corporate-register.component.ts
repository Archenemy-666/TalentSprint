import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CorporateServiceService } from '../corporate-service.service';

@Component({
  selector: 'app-corporate-register',
  templateUrl: './corporate-register.component.html',
  styleUrls: ['./corporate-register.component.css']
})
export class CorporateRegisterComponent implements OnInit {

  corporateHosp:any;
  constructor(public toastr:ToastrService , public router:Router , public service :CorporateServiceService) {
   }

  ngOnInit(): void {
  }
  registerCorporate(corporateRegForm:any):any{
  
    console.log(corporateRegForm);

    this.service.registerCorporate(corporateRegForm).subscribe((result:any) => console.log(result));
    this.toastr.success('Corporate is now Registered','Corporate Register');
    this.router.navigate(['corporateLogin']);
  }

}
