import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComplaintService {

  constructor(private http:HttpClient) { }
   
  postComplains(data:any){

    const postMessage={
      user_id:'',
      message:'',
    };
    return this.http.post('http://localhost:3001/postcomplains',data);
  }
 
  baseUrl = "http://localhost:3001"
}
