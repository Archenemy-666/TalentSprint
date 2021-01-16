import { Component, OnInit } from '@angular/core';
import { SmallScaleLoginComponent } from '../small-scale-login/small-scale-login.component';

@Component({
  selector: 'app-request-form',
  templateUrl: './request-form.component.html',
  styleUrls: ['./request-form.component.css']
})
export class RequestFormComponent implements OnInit {
  smallScaleName:any;
  constructor() { }

  ngOnInit(): any {
    this.smallScaleName = SmallScaleLoginComponent.smallName ;
  }

  async SubmitSmallScaleRequest(smallScaleRequestForm:any){

    // write tomorrow attach sprin and service methods 
  }

}
