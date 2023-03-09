import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComplaintService {

  baseUrl = "http://localhost:3001"

  constructor(private http:HttpClient) { }
   
  postComplains(data:any){

    const postMessage={
      user_id:'',
      complains:'',
    };
    return this.http.post('http://localhost:3001/postcomplains',data);
  }

  getComplaint(data:any){
    return this.http.get(this.baseUrl +"/getComplains");
  }
  
  getComplains(){
    return this.http.get(this.baseUrl +"/getComplains");
  }

}
