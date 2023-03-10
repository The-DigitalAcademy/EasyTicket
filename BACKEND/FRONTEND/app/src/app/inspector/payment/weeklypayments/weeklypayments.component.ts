import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { InspectorService } from 'src/app/service/inspector.service';

@Component({
  selector: 'app-weeklypayments',
  templateUrl: './weeklypayments.component.html',
  styleUrls: ['./weeklypayments.component.scss']
})
export class WeeklypaymentsComponent implements OnInit {
 
  constructor( private inspectorService:InspectorService,private router:Router, private formBuilder: FormBuilder,private toast : NgToastService,private http:HttpClient) { }
  info:any;
  inf=[];
  q:any
  searchText:any
  
  ngOnInit(): void {

this.inspectorService.getMonthlyProof().subscribe(res=>{
this.info=res;
this.inf=this.info.data;
console.log(res);





  })
}

view(items:any)
{


 this.router.navigate(['/loadtoken']);
 localStorage.setItem('id',items.id);



}

}

  


