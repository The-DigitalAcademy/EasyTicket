import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecoverpasswordService {


  baseUrl = "http://localhost:3001"


  constructor(private http:HttpClient) { }
  

  passwordrecover(data: any){
    return this.http.post(this.baseUrl +"/passwordrecover", data);
  }
  checkOtp(data: any){
    return this.http.post(this.baseUrl +"/checkOtp", data);
  }

  upadteEpassword(data: any){
    return this.http.put(this.baseUrl +"/upadteEpassword", data);
  }
  
}
