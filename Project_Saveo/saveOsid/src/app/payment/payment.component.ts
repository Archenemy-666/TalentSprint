import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(public toastr:ToastrService , public router:Router) { }

  ngOnInit(): void {
  }
  paymentComplete():any{
    this.toastr.success('payment successful','payment');
    this.router.navigate(['smallScaleCart']);

  }
  

}
