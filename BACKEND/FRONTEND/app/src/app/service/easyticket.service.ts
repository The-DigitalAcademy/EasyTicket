import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EasyticketService {

  constructor(private http:HttpClient) { }

  
  postRoutes(routeDetails:any){
    return this.http.post('http://localhost:3001/createTrip',routeDetails);
  }
 
}
