import { Component, OnInit } from '@angular/core';
import { SmallScaleService } from '../small-scale.service';

@Component({
  selector: 'app-small-scale-register',
  templateUrl: './small-scale-register.component.html',
  styleUrls: ['./small-scale-register.component.css']
})
export class SmallScaleRegisterComponent implements OnInit {

  constructor(public service:SmallScaleService) { }

  ngOnInit(): void {
  }
  registerSmallScale(smallScaleRegForm:any):any{
    console.log(smallScaleRegForm);
    this.service.registerSmallScale(smallScaleRegForm).subscribe((result :any) => console.log(result));
  }

}
