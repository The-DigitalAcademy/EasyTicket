import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CompanyService } from 'src/app/service/company.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-companyinfo',
  templateUrl: './companyinfo.component.html',
  styleUrls: ['./companyinfo.component.scss']
})
export class CompanyinfoComponent implements OnInit {


  getCompanydetails= null as any;

  data :any;
   name:any;
   id: any;
   userid: any;
   companyname:any;
   companylogo:any;
   companycontact:any;
   companyemail:any;
   companyaccount:any;

  companyInfo={
    id:'',
    user_id:'',
    companyname:'',
    companylogo:'',
    companycontact:'',
    companyemail:'',
    companyaccount:'',

  }

  constructor( private companyService: CompanyService) { }
  ngOnInit(): void {
    
    this.companyService.getInfo(this.companyInfo).subscribe((data: any)=>{
     this.id=data[0].id
     this.userid=data[0].user_id;
     this.companyname=data[0].company_name;
     this.companylogo=data[0].company_logo;
     this.companycontact=data[0].company_contact;
     this.companyemail=data[0].company_email;
     this.companyaccount=data[0].company_account;
    // this.companyService.getCompInfo().subscribe(Response :  any)=>{
     console.log(data)
     } )
  }
}

