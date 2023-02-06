import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  companyInfo: any;


  constructor( private http:HttpClient) { }

  baseUrl="http://localhost:3001"

    //Company services
    //Http Companyget method
getInfo( data: any){
  return this.http.get(this.baseUrl + '/getInfo',data);
}

// getInfo( data: any){
//   return this.http.get('${this.baseUrl}/this.getCompInfo')
// }

}


