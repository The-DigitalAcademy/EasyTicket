
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { ComplaintService } from 'src/app/service/complaint.service';
import { text } from 'stream/consumers';
import { FormControl,FormGroup } from '@angular/forms';
import { JwtService } from 'src/app/service/jwt.service';
import { PassengerService } from 'src/app/service/passenger.service';

@Component({
  selector: 'app-complaint',
  templateUrl: './complaint.component.html',
  styleUrls: ['./complaint.component.scss']
})
export class ComplaintComponent implements OnInit {
 
  form:FormGroup= new FormGroup(
  {
    complain: new FormControl('')
  }
);


user = {
  id: '',
  fullname:'',
  email:'',
  amount:''

}
submitted = false;

  constructor(private http:HttpClient,private complaintService:ComplaintService,private jwtService : JwtService,private Passenger:PassengerService) { }



  ngOnInit(): void {

  }


  onComplaintCreate(value:any)
  {
    this.submitted = true;


this.user= this.jwtService.getDetails(localStorage.getItem('token')).data.rows[0];
let id=this.user.id;

var complain_data={
  user_id:id,
  complains:value.complain
}

console.log(complain_data)
this.http.post('http://localhost:3001/postComplains',complain_data, {responseType:'text'}).subscribe((res)=>
 {
   let result=res;
  console.log(res);
  
 });

}


}
