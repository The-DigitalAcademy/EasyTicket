import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PassengerService {
  get(id: number) {
    throw new Error('Method not implemented.');
  }
  save: any;

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

 

  postDestination(id:any,data:any) {
    return this.http.post(this.baseUrl+'/postDestination/',data);
  }

  getUserPlaces(id: any){

    return this.http.get(this.baseUrl +"/getUserPlaces/"+id);

  }
  deleteAddress(id: any){

    return this.http.delete(this.baseUrl +"/deleteAddress/"+id);

  }
  updateProfile(id: any,data:any){
    return this.http.put(this.baseUrl +"/updateProfile/"+id,data);
  }

  
}
