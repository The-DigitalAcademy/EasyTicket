import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EasyticketService {

  constructor(private http:HttpClient) { }

  baseUrl = "http://localhost:3001"
 //main service

  login(data: any){
    return this.http.post(this.baseUrl +"/login", data);
  }

  register(data: any){
    return this.http.post(this.baseUrl +"/register", data);
  }
  
}
