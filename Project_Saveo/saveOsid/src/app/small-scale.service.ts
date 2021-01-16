import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SmallScaleService {
 

  constructor(public httpClient:HttpClient) { }

  registerSmallScale(smallScaleRegForm: any):any {
    console.log(smallScaleRegForm);
    return this.httpClient.post('smallScaleRegister/',smallScaleRegForm);
  }
  smallScaleLoginAuthentication(smallScaleId: any, password: any) {
    return this.httpClient.get('getSmallScaleDetails/'+ smallScaleId + '/' + password );
  }

}
