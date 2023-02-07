import { Component, OnInit } from '@angular/core';
import { JwtService } from 'src/app/service/jwt.service';
import { PassengerService } from 'src/app/service/passenger.service';
// import { Upload } from 'src/app/upload';
import { HttpClient } from '@angular/common/http';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { Router } from '@angular/router';
import { CompanyService } from 'src/app/service/company.service';


@Component({
  selector: 'app-p-payment',
  templateUrl: './p-payment.component.html',
  styleUrls: ['./p-payment.component.scss']
})
export class PPaymentComponent implements OnInit {

//companys ind
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


  // proof: Upload[] = [];
  file: any;
  imgUrl!:any;

  UploadForm: FormGroup = new FormGroup({

      proof: new FormControl('')
  })

  submitted = false;

  constructor(private jwtService : JwtService,private Passenger:PassengerService, private http:HttpClient,private toast :NgToastService,private router:Router,private companyService: CompanyService) { }

  user = {
    id: '',
    fullname:'',
    email:''

}

  ngOnInit(): void {
    this.companyService.getInfo(this.companyInfo).subscribe((data: any)=>{
      this.id=data[0].id
      this.userid=data[0].user_id;
      this.companyname=data[0].company_name;
      this.companylogo=data[0].company_logo;
      this.companycontact=data[0].company_contact;
      this.companyemail=data[0].company_email;
      this.companyaccount=data[0].company_account;
      console.log(data)
      } )

    }

  onFileChange(event :any)
  {
    if(event.target.files.length>0)
    {
      this.file = event.target.files[0];
  
    }
  
  }

  async postProof(){


  const formData = new FormData();    
  formData.append("file",this.file)    
  formData.append("upload_preset","sxnxtyof");     
  this.http.post('https://api.cloudinary.com/v1_1/dhtppljex/image/upload',formData).subscribe(async (res:any)=>{     
    

    this.imgUrl =  await res.url;

    let pUpload = {
      
      
      proof: res.url
   
    }

    console.log(this.imgUrl); 
    

    // this.Passenger.postProof().subscribe((next:any) => {
    //   console.log('Item has been added successfully!');
    //   this.router.navigate(['/admin/food']);
    //   this.toast.success({detail:'Success',summary:'Item has been added successfully!', sticky:false,position:'tr', duration:6000})
    
    //   this.submitted = false;
    // });


   var uploading={
    user_id:this.user.id,
    proof:this.imgUrl
    }

    console.log(uploading);

    this.Passenger.postProof(uploading).subscribe((next:any) => {


      this.toast.success({detail:"Success",summary:'File Uploaded', duration:2000})
  setTimeout(()=> this.router.navigate(['p-dashboard']),900)

      //console.log('Document has been added successfully!');
      this.submitted = false;
    })
    //   t
    // });
})  

  }
  

}
