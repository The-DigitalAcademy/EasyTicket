import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Validation from './validation';
import { NgToastService } from 'ng-angular-popup';
import { EasyticketService } from '../service/easyticket.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  

})
export class RegisterComponent implements OnInit {
  form: FormGroup = new FormGroup({
   
    fullname: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl('')
  });
  submitted = false;
 
  public isVisible: boolean = false;
  constructor(private formBuilder: FormBuilder,private router:Router,private toast : NgToastService,private http:HttpClient,private easyticket:EasyticketService) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        fullname: ['', [Validators.required,
                    Validators.minLength(3),Validators.pattern("^(?=.{1,40}$)[a-zA-Z ]+(?:[-'\s][a-zA-Z ]+)*$")]
                  ],
        
        email: ['', [Validators.required, Validators.email,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(15),
            Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,15}')
          ]
        ],
        confirmPassword: ['', Validators.required]
      },
      {
        validators: [Validation.match('password', 'confirmPassword')]
      }
    );
  }
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }


  //submit

  onSubmit(data:any){

    this.submitted = true;
if(data.fullname=='' || data.email=='' || data.password=='' ||data.confirmPassword=='')
{


}else{
    //Add the User to the Database


    if(data.password != data.confirmPassword)
    {


    }else{
    this.http.post('http://localhost:3001/register',data, {responseType:'text'}).subscribe((results)=>{
      
    console.log(results);

      if(results == 'Account created succesfully!')
      {
        this.openSucess();
        this.router.navigate(['/login'])
      }
      else
      {
        this.openWarning()
        this.router.navigate(['/register'])
      }
    
      if (this.isVisible) { 
     
        return;
      } 
   


      }
      ,(err)=>{
        this.openWarning();
      }
      )
      
    }
  }
  }
  
    openSucess(){
      this.toast.success({detail:"Success", summary:"Succesfully Registered"})
    }

    openWarning(){
      this.toast.warning({detail:"Warning",summary:'Email already exist', duration:2000})
    }


}

