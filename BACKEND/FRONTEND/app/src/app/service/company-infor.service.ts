import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CompanyInforService {

  baseUrl = "http://localhost:3001"

  constructor(private http:HttpClient) { }

  infor(data: any){
    return this.http.post(this.baseUrl +"/postInfo", data);
  }

  getInfor(data: any){
    return this.http.post(this.baseUrl +"/getInfo", data);
  }
}
 