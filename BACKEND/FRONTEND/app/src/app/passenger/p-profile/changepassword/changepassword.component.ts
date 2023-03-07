
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Validation from './validation';
import { NgToastService } from 'ng-angular-popup';
import { NgxSpinnerService } from 'ngx-spinner';
import { PassengerService } from 'src/app/service/passenger.service';
import { JwtService } from 'src/app/service/jwt.service';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.scss']
})
export class ChangepasswordComponent implements OnInit {


  form:FormGroup= new FormGroup(
    {
      newp: new FormControl(''),
      cpass: new FormControl('')
    }
  );

  submitted = false
  constructor(private jwtService : JwtService,private formBuilder: FormBuilder,private router:Router,private toast : NgToastService,private http:HttpClient,private spinner: NgxSpinnerService,private passenger:PassengerService) {}

  user = {
    id: '',
    fullname:'',
    email:'',
    amount:''

}
  ngOnInit(): void {

    this.form = this.formBuilder.group(
      {
       newp: [
          '',
          [
            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(15),
            Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,15}')
          ]
        ],
        cpass: ['', Validators.required]
      },
      {
        validators: [Validation.match('newp', 'cpass')]
      }
    );
  }
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
  newPassword(value:any)
  {
    
    
    this.user= this.jwtService.getDetails(localStorage.getItem('token')).data.rows[0];
    let id=this.user.id

    this.submitted = true;


    if(value.newp!='' && value.cpass!='')
    {


      if(value.newp == value.cpass)
      {

        this.spinner.show();

        var inputs={
        
          'id':id,
          'password':value
        }
        
        
        this.passenger.updatePassword(inputs).subscribe((data)=>{
        
          setTimeout(()=> this.spinner.hide(),900);
          setTimeout(()=>this.toast.success({detail:"Success",summary:'Password changed successfully.', duration:2000}),700)
          setTimeout(()=> this.router.navigate(['/p-profile']),1600);
        
        })
        


      }
   
     
    }
 
 

  }
}
