import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InspectorService {

 baseUrl = "http://localhost:3001"
  
  constructor(private http:HttpClient) { }


 getAllproof(){
  return this.http.get(this.baseUrl +"/getProofuser");
}

loadToken(data:any){
  return this.http.put(this.baseUrl +"/loadTokens",data);
}

getStatus(){
  return this.http.get(this.baseUrl +"/getStatus");
}

getAllUsers(){
  return this.http.get(this.baseUrl +"/getAllUsers");
}

getDates(){
  return this.http.get(this.baseUrl +"/getDates");
}

getStatusDate(){
  return this.http.get(this.baseUrl +"/getStatusDate");
}

getReport(){
  return this.http.get(this.baseUrl +"/getReport");
}

getAllUsersActive(){
  return this.http.get(this.baseUrl +"/getAllUsersActive");
}

getAllUsersInActive(){
  return this.http.get(this.baseUrl +"/getAllUsersInActive");
}


suspendAccount(id:any){

  return this.http.put(this.baseUrl +"/updateStatus/"+id,{});
 

}

activateAccount(id:any){

  return this.http.put(this.baseUrl +"/activatePassenger/"+id,{});
 

}

getTransactionbyId(id:any){
  return this.http.get(this.baseUrl +"/getTransactionbyId/"+id);
}

}

