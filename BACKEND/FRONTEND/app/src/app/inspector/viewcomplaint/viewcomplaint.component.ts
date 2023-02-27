import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ComplaintService } from 'src/app/service/complaint.service';

@Component({
  selector: 'app-viewcomplaint',
  templateUrl: './viewcomplaint.component.html',
  styleUrls: ['./viewcomplaint.component.scss']
})
export class ViewcomplaintComponent implements OnInit {
  public loading:boolean=false;
fullname:any;
complains:any;
times:any;

 complainInfo = {
  id: '',
  fullname:'',
  complains:'',
  times:'',
 }
  complaintService: any;

  constructor(private http:HttpClient ,private complaint:ComplaintService) { }

  ngOnInit(): void {


    this.loading=true;
    this.complaint.getComplaint(this.complainInfo).subscribe((data:any)=>{

      this.fullname=data;
      this.complains=data;
      this.times=data;

      
      console.log(this.times)

    }
    )
  }
  // viewComplaint(viewComplaint: any) {
  //   throw new Error('Method not implemented.');
  // }

}


