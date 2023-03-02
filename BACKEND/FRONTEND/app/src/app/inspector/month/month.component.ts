import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ComplaintService } from 'src/app/service/complaint.service';

@Component({
  selector: 'app-month',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.scss']
})
export class MonthComponent implements OnInit {

  constructor(private http:HttpClient,private complaint :ComplaintService) { }

  fullname:any;
  complains:any;
  times:any;
  
   complainInfo = {
    id: '',
    fullname:'',
    complains:'',
    times:'',
   }

  ngOnInit(): void {

    this.complaint.getComplaint(this.complainInfo).subscribe((data:any)=>
    {

      this.fullname=data;
      this.complains=data;
      this.times=data;

      
      console.log(this.times)



    })
  }

}
