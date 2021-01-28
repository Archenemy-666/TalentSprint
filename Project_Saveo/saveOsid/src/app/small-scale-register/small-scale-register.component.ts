import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SmallScaleService } from '../small-scale.service';

@Component({
  selector: 'app-small-scale-register',
  templateUrl: './small-scale-register.component.html',
  styleUrls: ['./small-scale-register.component.css']
})
export class SmallScaleRegisterComponent implements OnInit {

  constructor(public toastr:ToastrService , public router:Router , public service:SmallScaleService) { }

  ngOnInit(): void {
  }
  registerSmallScale(smallScaleRegForm:any):any{
    console.log(smallScaleRegForm);
    this.service.registerSmallScale(smallScaleRegForm).subscribe((result :any) => console.log(result));
    this.toastr.success('Registered smallscale account','SmallScaleRegister');
    this.router.navigate(['smallScaleLogin']);
  }

}
