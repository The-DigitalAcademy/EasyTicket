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


  PayRoute(data:any){
    return this.http.put(this.baseUrl +"/payingTrip/",data);
  }

  Historytrip(data:any){

    return this.http.post(this.baseUrl +"/historyTrip/",data);
  }

  //view tokens used

  getUserUsedTokens(id: any){

    return this.http.get(this.baseUrl +"/getUserToken/"+id);

  }

  //getting trascation history

  getUserTransaction(id: any){

    return this.http.get(this.baseUrl +"/getUserTransaction/"+id);

  }

    //getting trip no history

    getUserUsertrip(id: any){

      return this.http.get(this.baseUrl +"/getUserUsertrip/"+id);
  
    }

     //getting uploads

     getUserUploads(id: any){

      return this.http.get(this.baseUrl +"/getUserUploads/"+id);
  
    }
      //getting uploads

      getUserComplain(id: any){

        return this.http.get(this.baseUrl +"/getUserComplain/"+id);
    
      }
    
      //getting passenger complains

      getUserComplainByUserid(id: any){

        return this.http.get(this.baseUrl +"/getUserComplainByUserid/"+id);

      }


      //getting passenger complains

      readComplain(id: any){

        return this.http.get(this.baseUrl +"/readComplain/"+id);

      }
      //delete complain
      deleteComplain(id: any){

        return this.http.delete(this.baseUrl +"/deleteComplain/"+id);

      }
       //update password
       updatePassword(data:any){

        return this.http.put(this.baseUrl +"/updatePassword",data);

      }
      
        //search prices in db
        searchStation(info:any){

          return this.http.post(this.baseUrl +"/searchStation",info);
  
        }

     
      
  
}
