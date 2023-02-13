import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  } from "module";
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { CompanyInforService } from '../service/company-infor.service';
// import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-company-infor',
  templateUrl: './company-infor.component.html',
  styleUrls: ['./company-infor.component.scss']
})
export class CompanyInforComponent implements OnInit {
  file: any;
  imgUrl!:any;

companyForm: FormGroup = new FormGroup({

    user_id: new FormControl(''),
    company_name: new FormControl(''),
    // company_logo:new FormControl(''),
    company_contact: new FormControl(''),
    company_email: new FormControl(''),
    company_account: new FormControl(''),

})

submitted = false;

  FormBuilder: any;
  // submitted: boolean | undefined | undefined | undefined | undefined;
  toast: any;
userPost: any;

  constructor(private http: HttpClient,private companyinfoservice:CompanyInforService) { 

 
}  

compInfo = {
  id: '',
  user_id: '',
  company_name: '',
  company_logo: '',
  company_contact: '',
  company_email: '',
  company_account: ''
}

ngOnInit(): void {


  
  }
  

  infor(){

  var  information ={
    user_id:this.companyForm.value.user_id,
    company_name: this.companyForm.value.company_name,
    // company_logo: this.companyForm.value.company_logo,
    company_contact: this.companyForm.value.company_contact,
    company_email:this.companyForm.value.company_email,
    company_account:this.companyForm.value.company_account
  }
// console.log(information)
//   console.log('the information : ',information)

this.companyinfoservice.infor(information).subscribe((res:any) =>{
  let result=res;
  console.log('hi ',result)
})

}


}

