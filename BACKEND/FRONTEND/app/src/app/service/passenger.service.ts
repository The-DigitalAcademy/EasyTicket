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

  postProof(data:any) {
    return this.http.post(this.baseUrl+'/postProof',data);
  }

  getProofOfuser(id: any){

    return this.http.get(this.baseUrl +"/getProof/"+id);

  }

  
}
