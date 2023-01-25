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

  public isVisible: boolean = false;
  public Visible: boolean = false;


  form: FormGroup = new FormGroup({
   
    email: new FormControl(''),
    password: new FormControl('')
   
  });
  submitted = false;


  user = {
    id: '',
    fullname:'',
    email:''

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



  if(data.email=='' || data.password=='')
  {



  }else
  {
//check

//connect to server
this.guardservice.login();


this.http.post('http://localhost:3001/login',data)
.subscribe((results:any)=>{
 

  localStorage.setItem('token',results.token);

 
if(localStorage.getItem('token')!=null){

this.user= this.jwtService.getDetails(localStorage.getItem('token')).data[0];


  this.isVisible = true;
  setTimeout(()=> this.isVisible = false,850)
  this.toast.success({detail:"Success",summary:'Loggedin Succesfully', duration:2000})
  setTimeout(()=> this.router.navigate(['/p-dashboard']),900)

 

   
  }
  else{
   
   setTimeout(()=> this.Visible = true,850)
   
   setTimeout(()=> this.router.navigate(['/login']),900)
   this.Visible = false;
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