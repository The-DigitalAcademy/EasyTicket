import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';

import { NgToastService } from 'ng-angular-popup';
import { GuardService } from '../service/guard.service';
import { JwtService } from '../service/jwt.service';

@Component({
  selector: 'app-passwordrecovery',
  templateUrl: './passwordrecovery.component.html',
  styleUrls: ['./passwordrecovery.component.scss']
})
export class PasswordrecoveryComponent implements OnInit {
  
  
  model:any = {}
  userForm: any;
  private _auth: any;
  guardService: any;



  form: FormGroup = new FormGroup({
   
    email: new FormControl('')
   
  });
  submitted = false;

  constructor(private http:HttpClient,private formBuilder: FormBuilder,private router:Router, private jwtService : JwtService,private guardservice : GuardService,private toast :NgToastService) { }


  ngOnInit(): void {

    this.form = this.formBuilder.group(
      {
        
        email: ['', [Validators.required, Validators.email]]
      
      },
      
    );
  }
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(data:any): void {
  this.submitted = true;


  var emailcheck={
    email:data.email
  }

    if(data.email != '')
    {
      this.http.post('http://localhost:3001/passwordrecover',emailcheck, {responseType:'text'}).subscribe((res)=>
      {

  
        console.log(res)

      if(res=='Email Sent!')
      {
        this.toast.success({detail:"Success",summary:'Email confirmed.', duration:2000})
        setTimeout(()=> this.router.navigate(['/passwordrecover']),1600)

      }else
      {
        this.toast.warning({detail:"Warning",summary:'Email not found.', duration:2000})
        setTimeout(()=> this.router.navigate(['/passwordrecover']),1600)
      }
 
      });

      console.log(data.email)

    }
 
   
    
  }

}
