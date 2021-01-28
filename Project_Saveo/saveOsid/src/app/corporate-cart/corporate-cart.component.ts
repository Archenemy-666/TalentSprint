import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartService } from '../cart.service';
import { CorporateLoginComponent } from '../corporate-login/corporate-login.component';

declare var jQuery:any;

@Component({
  selector: 'app-corporate-cart',
  templateUrl: './corporate-cart.component.html',
  styleUrls: ['./corporate-cart.component.css']
})
export class CorporateCartComponent implements OnInit {
  carts:any;
  corporateName:any;
  editObject:any;
  constructor(public toastr:ToastrService,  public service:CartService) { }

  ngOnInit(): void {
    this.corporateName = CorporateLoginComponent.corporateName;
    this.service.getByCorporateName(this.corporateName).subscribe((data:any) => {this.carts=data ; console.log(data);});
    this.editObject = {price:'',status:'',corporateContact:''}
  }

  deleteRequest(cart:any):any{
    this.service.deleteReq(cart).subscribe((data:any) => {
     const i=this.carts.findIndex((record:any) => {
   return  this.toastr.warning('deleted request','delete'); 
     })
     this.carts.splice(i,1);     
     });


   }
   showQuotationPopup(cart:any):void{
     jQuery('#cartModel').modal('show');
     this.editObject = cart ;
   }
   updateCart():void{
     console.log(this.editObject);
     this.service.updateCart(this.editObject).subscribe();
     this.toastr.info('info updated','update');
   }

}
