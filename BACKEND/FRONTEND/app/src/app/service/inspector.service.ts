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

// getActive
getActive(){
  return this.http.get(this.baseUrl +"/getActive");
}


// getActive
getSuspended(){
  return this.http.get(this.baseUrl +"/getSuspended");
}

getReport(){
  return this.http.get(this.baseUrl +"/getReport");
}

getdailyReport(){
  return this.http.get(this.baseUrl +"/dailyreport");
}


getWeeklyReport(){
  return this.http.get(this.baseUrl +"/weeklyreport");
}

getMonthlyReport(){
  return this.http.get(this.baseUrl +"/monthlyreport");
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
//payement
getDailyProof(){
  return this.http.get(this.baseUrl +"/getDailyProof");
}


getWeeklyProof(){
  return this.http.get(this.baseUrl +"/getWeeklyProof");
}


getMonthlyProof(){
  return this.http.get(this.baseUrl +"/getMonthlyProof");
}
getNopassenger(){
  return this.http.get(this.baseUrl +"/getNopassenger");
}
}




