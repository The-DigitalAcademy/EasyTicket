import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PassengerService {

  constructor(private http:HttpClient) { }

  baseUrl = "http://localhost:3001"
 //passenger services

 getToken(id: any){
    return this.http.get(this.baseUrl +"/viewTokens/"+id);
  }

  
}
