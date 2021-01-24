import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {



  constructor(public httpClent:HttpClient) { }

  getByCorporateName(corporateName: any):any {
    return this.httpClent.get('getCartDetailsByCorpName/'+corporateName);
  }

  getBySmallScaleName(smallScaleName: any):any {
    return this.httpClent.get('getCartDetailsBySmallName/'+smallScaleName);
  }
  deleteReq(cart: any):any {
    return this.httpClent.post('deleteReq/',cart);
  }

  updateCart(editObject: any):any {
    return this.httpClent.post('updateCart',editObject);
  }
}
