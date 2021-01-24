import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { SmallScaleLoginComponent } from '../small-scale-login/small-scale-login.component';

declare var jQuery:any;

@Component({
  selector: 'app-small-scale-cart',
  templateUrl: './small-scale-cart.component.html',
  styleUrls: ['./small-scale-cart.component.css']
})
export class SmallScaleCartComponent implements OnInit {
  carts:any;
  smallScaleName:any;
  editObject:any;
  constructor(public service:CartService) { }

  ngOnInit(): void {
    this.smallScaleName = SmallScaleLoginComponent.smallName;
    this.service.getBySmallScaleName(this.smallScaleName).subscribe((data:any) => {this.carts=data ; console.log(data);});
    this.editObject={status:''};
  }

  deleteRequest(cart:any):any{
    this.service.deleteReq(cart).subscribe((data:any) => {
     const i=this.carts.findIndex((record:any) => {
   return  console.log(record); 
     })
     this.carts.splice(i,1);     
     });  } 
     
     showQuotationPopup(cart:any):void{
      jQuery('#cartModel').modal('show');
      this.editObject = cart ;
    }
    updateCart():void{
      console.log(this.editObject);
      this.service.updateCart(this.editObject).subscribe();
    }

}
