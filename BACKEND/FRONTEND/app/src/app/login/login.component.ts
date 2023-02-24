import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import Validation from '../register/validation';
import { GuardService } from '../service/guard.service';
import { JwtService } from '../service/jwt.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  model:any = {}
  userForm: any;
  private _auth: any;
  guardService: any;



  form: FormGroup = new FormGroup({
   
    email: new FormControl(''),
    password: new FormControl('')
   
  });
  submitted = false;


  users = {
    email:'',
    fullname: '',
    id:'',
    status: '',
  

}

  constructor(private http:HttpClient,private formBuilder: FormBuilder,private router:Router, private jwtService : JwtService,private guardservice : GuardService,private toast :NgToastService) { }


  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
           
            Validators.maxLength(40)
          ]
        ],
        
        
      },
      
    );
  }
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(data:any): void {
    this.submitted = true;
   this.guardservice.login();


  if(data.email=='' || data.password=='')
  {



  }else
  {

 


this.http.post('http://localhost:3001/login',data)
.subscribe((results:any)=>{
 

  localStorage.setItem('token',results.token);
  

 
if(localStorage.getItem('token')!=null){


this.users= this.jwtService.getDetails(localStorage.getItem('token')).data.rows[0];
let id=this.users.id

if(this.users.status=='active'){

  

if(this.users.id > '6')
{

  this.toast.success({detail:"Success",summary:'Logged in Succesfully as Passenger', duration:2000})
  setTimeout(()=> this.router.navigate(['/p-dashboard']),900)

}else
{

  this.toast.success({detail:"Success",summary:'Logged in Succesfully as Inspector', duration:2000})
  setTimeout(()=> this.router.navigate(['/idashboard']),900)


}
}else{
  this.toast.error({detail:"error",summary:'Your Account has been suspended', duration:2000})
  setTimeout(()=> this.router.navigate(['/']),900)
}


 


   
  }
  else{
   

   
   setTimeout(()=> this.router.navigate(['/login']),900)

   console.warn(results)
   this.toast.warning({detail:"Warning",summary:'Email does not exist'})

  }
  
},(err)=>{
 this.openWarning();
})







}


  }
    

  openSucess(){
    this.toast.success({detail:"Warning", summary:"Succesfully Login"})
  }

  openWarning(){
    this.toast.warning({detail:"Warning",summary:'Invalid email or password', duration:2000})
  }
}