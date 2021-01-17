import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MarketService {

  constructor(public httpClient: HttpClient) { }
  registerSmallScaleReq(smallScaleRequestForm: any):any {
    
    console.log(smallScaleRequestForm);
    return this.httpClient.post('registerRequest/',smallScaleRequestForm);
  }

  getAllRequirements():any {
    return this.httpClient.get('showAllRequirements');
  }
}
