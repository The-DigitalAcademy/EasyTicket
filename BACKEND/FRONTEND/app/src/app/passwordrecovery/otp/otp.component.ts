import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { NgxSpinnerService } from 'ngx-spinner';
import { GuardService } from 'src/app/service/guard.service';
import { JwtService } from 'src/app/service/jwt.service';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { RecoverpasswordService } from 'src/app/service/recoverpassword.service';
@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss']
})
export class OtpComponent implements OnInit {

  model:any = {}
  userForm: any;
  private _auth: any;
  guardService: any;
  params:any
  datacheck:any


  form: FormGroup = new FormGroup({
   
    email: new FormControl('')
   
  });
  submitted = false;

  constructor(private http:HttpClient,
    private formBuilder: FormBuilder,
    private router:Router,
    private jwtService : JwtService,
    private passrecover : RecoverpasswordService,
    private toast :NgToastService,
    private spinner: NgxSpinnerService,route: ActivatedRoute) {

      this.params = route.snapshot.params;



     }

  ngOnInit(): void {

    this.form = this.formBuilder.group(
      {
        
        otp: ['', [Validators.required]]
      
      },
      
    );

    console.log(this.params)
   
  }
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
  onSubmit(value:any)
  {
    
    this.submitted = true;
    if(this.form.value.otp!='')
    {
      this.spinner.show()

      var input={
        email:sessionStorage.getItem('recovermail'),
        otp:value.otp
      }

  //get match of otp via email 
     this.passrecover.checkOtp(input).subscribe((data)=>{
      
      
      this.datacheck=data;
      if(this.datacheck[0].otp==input.otp && this.datacheck[0].email==input.email)
      {
        setTimeout(()=>this.spinner.hide(),600)
        this.toast.success({detail:"Success",summary:'Details confirmed.', duration:2000})
        setTimeout(()=> this.router.navigate(['/updatepassword']),700)

      }else
      {

        this.toast.warning({detail:"Error",summary:'Details doesnt match.', duration:2000})
        setTimeout(()=> this.router.navigate(['/passwordrecovery']),700)

      }
    


     })


    }
  

  }

}
