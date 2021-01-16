import { Component, OnInit } from '@angular/core';
import { CorporateLoginComponent } from '../corporate-login/corporate-login.component';

@Component({
  selector: 'app-corporate-home',
  templateUrl: './corporate-home.component.html',
  styleUrls: ['./corporate-home.component.css']
})
export class CorporateHomeComponent implements OnInit {
  corporateName:any;
  constructor() { }

  ngOnInit(): void {
    this.corporateName = CorporateLoginComponent.corporateName;
  }

}
