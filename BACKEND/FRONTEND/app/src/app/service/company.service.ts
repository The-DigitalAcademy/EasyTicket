import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  getCompInfo() {
    throw new Error('Method not implemented.');
  }

  constructor( private http:HttpClient) { }

  baseUrl="http://localhost:3001"

    //Company services
    getCompanyInfo(){

return this.http.get(this.baseUrl+"/getInfo");
    }
    get(_arg0: string) {

      throw new Error('Method not implemented.');

    }
    //Http Companyget method
public getInfo(): Observable<any> {

  return this.http.get<any>(this.baseUrl);
}
}
