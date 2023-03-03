import { Component, OnInit } from '@angular/core';
import { JwtService } from 'src/app/service/jwt.service';
import { PassengerService } from 'src/app/service/passenger.service';
// import { Upload } from 'src/app/upload';
import { HttpClient } from '@angular/common/http';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-p-payment',
  templateUrl: './p-payment.component.html',
  styleUrls: ['./p-payment.component.scss']
})
export class PPaymentComponent implements OnInit {

  // proof: Upload[] = [];
  file: any;
  imgUrl!:any;

  UploadForm: FormGroup = new FormGroup({

      proof: new FormControl('')
  })

  submitted = false;

  constructor(private jwtService : JwtService,private Passenger:PassengerService, private http:HttpClient,private toast :NgToastService,private router:Router,private spinner: NgxSpinnerService) { }

  user = {
    id: '',
    fullname:'',
    email:'',
    amount:''

}

  ngOnInit(): void {
    
    this.user= this.jwtService.getDetails(localStorage.getItem('token')).data.rows[0];
    

  }

  onFileChange(event :any)
  {
    if(event.target.files.length>0)
    {
      this.file = event.target.files[0];
  
    }
  
  }

  async postProof(){

  this.spinner.show();
  const formData = new FormData();    
  formData.append("file",this.file)    
  formData.append("upload_preset","sxnxtyof");     
  this.http.post('https://api.cloudinary.com/v1_1/dhtppljex/image/upload',formData).subscribe(async (res:any)=>{     
    

  this.imgUrl =  await res.url;

   var uploading={
    user_id:this.user.id,
    proof:this.imgUrl
    }
    this.Passenger.postProof(uploading).subscribe((next:any) => {
    



  this.toast.success({detail:"Success",summary:'File Uploaded', duration:2000})
  setTimeout(()=> this.router.navigate(['p-dashboard']),900)

      this.submitted = false;
      this.spinner.hide();
    })
    
})  

  }
  

}
