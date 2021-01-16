import { Component, OnInit } from '@angular/core';
import { SmallScaleLoginComponent } from '../small-scale-login/small-scale-login.component';

@Component({
  selector: 'app-small-scale-home',
  templateUrl: './small-scale-home.component.html',
  styleUrls: ['./small-scale-home.component.css']
})
export class SmallScaleHomeComponent implements OnInit {
  smallScaleName:any;
  constructor() { }

  ngOnInit(): any {
    this.smallScaleName = SmallScaleLoginComponent.smallName ;
  }

}
