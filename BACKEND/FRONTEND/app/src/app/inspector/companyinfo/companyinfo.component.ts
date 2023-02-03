import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CompanyService } from 'src/app/service/company.service';

@Component({
  selector: 'app-companyinfo',
  templateUrl: './companyinfo.component.html',
  styleUrls: ['./companyinfo.component.scss']
})
export class CompanyinfoComponent implements OnInit {


  getCompanydetails= null as any;

  companyInfo={
    id:'',
    user_id:'',
    companyname:'',
    companylogo:'',
    companycontact:'',
    companyemail:'',
    comanyaccount:'',

  }

  constructor( private companyService: CompanyService) { }

  ngOnInit(): void {
    

    // this.companyService.getCompInfo().subscribe(Response :  any)=>{
    //  console.log(Response)
    //  } )
   
  }

}

