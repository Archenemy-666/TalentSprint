import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CorporateServiceService {


  constructor(public httpClient: HttpClient) { }


  registerCorporate(corporateRegForm: any):any {
    console.log(corporateRegForm);
    return this.httpClient.post('registerCorp/',corporateRegForm);
  }

  corporateLoginAuthentication(corporateId: any, password: any): any{
    return this.httpClient.get('getCorporateDetails/'+ corporateId + '/' + password );
  }
}

