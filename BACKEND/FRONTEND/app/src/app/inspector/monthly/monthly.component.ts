import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ComplaintService } from 'src/app/service/complaint.service';

@Component({
  selector: 'app-monthly',
  templateUrl: './monthly.component.html',
  styleUrls: ['./monthly.component.scss']
})
export class MonthlyComponent implements OnInit {

  fullname:any;
  complains:any;
  date_created:any;
  
   complainInfo = {
    id: '',
    fullname:'',
    complains:'',
    date_created:'',
   }

  constructor(private http:HttpClient,private complaint :ComplaintService) { }

  ngOnInit(): void {
    this.complaint. ComplainsPerMonth(this.complainInfo).subscribe((data:any)=>
    {

      this.fullname=data;
      this.complains=data;
      this.date_created=data;

      
      console.log(this.date_created)



    })
  }
  }


