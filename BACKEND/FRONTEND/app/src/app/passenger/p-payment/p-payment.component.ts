import { Component, OnInit } from '@angular/core';
import { JwtService } from 'src/app/service/jwt.service';
import { PassengerService } from 'src/app/service/passenger.service';
// import { Upload } from 'src/app/upload';
import { HttpClient } from '@angular/common/http';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


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

  constructor(private jwtService : JwtService,private Passenger:PassengerService, private http:HttpClient) { }

  user = {
    id: '',
    fullname:'',
    email:''

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

      //console.log('Document has been added successfully!');
      this.submitted = false;
    })
    //   t
    // });
})  

  }

}
