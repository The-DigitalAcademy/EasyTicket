import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ComplaintService } from 'src/app/service/complaint.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss']
})
export class AllComponent implements OnInit {
  public loading:boolean=false;
  fullname:any;
  complains:any;
  date_created:any;
  
   complainInfo = {
    id: '',
    fullname:'',
    complains:'',
    date_created:'',
   }
    complaintService: any;

  constructor(private http:HttpClient ,private complaint:ComplaintService) { }

  ngOnInit(): void {

    this.loading=true;
    this.complaint.getComplaint (this.complainInfo).subscribe((data:any)=>{

      this.fullname=data;
      this.complains=data;
      this.date_created=data;

  }
    )
  }

}
