
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { ComplaintService } from 'src/app/service/complaint.service';
import { text } from 'stream/consumers';
import { FormControl,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-complaint',
  templateUrl: './complaint.component.html',
  styleUrls: ['./complaint.component.scss']
})
export class ComplaintComponent implements OnInit {

  form:FormGroup= new FormGroup(
  {
    compName: new FormControl(''),
  }
)

  constructor(private http:HttpClient,private complaintService:ComplaintService) { }

    onComplaintCreate(data:any)
  {

console.log(data);
 this.http.post('http://localhost:3001/complaint',data).subscribe((res)=>
 {

  console.log(res);
 });

  }
  ngOnInit(): void {
  }

}
