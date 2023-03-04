import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Validation from './validation';
import { NgToastService } from 'ng-angular-popup';
import { NgxSpinnerService } from 'ngx-spinner';
import { RecoverpasswordService } from 'src/app/service/recoverpassword.service';


@Component({
  selector: 'app-updatepassword',
  templateUrl: './updatepassword.component.html',
  styleUrls: ['./updatepassword.component.scss']
})
export class UpdatepasswordComponent implements OnInit {
  form: FormGroup = new FormGroup({
    password: new FormControl(''),
    confirmPassword: new FormControl('')
  });
  submitted = false;
  constructor(private formBuilder: FormBuilder,private router:Router,private toast : NgToastService,
    private spinner: NgxSpinnerService,private pass:RecoverpasswordService) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
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

  onSubmit(value:any){

    this.submitted = true;
    var input={
      email:sessionStorage.getItem('recovermail'),
      password:value.password
    }
    
    if(value.password!='' && value.confirmPassword!='')
    {
      
      if(value.password==value.confirmPassword)
      {
       
        this.spinner.show()
     //update password 
     this.pass.upadteEpassword(input).subscribe((data)=>{
      
        setTimeout(()=>this.spinner.hide(),500)
        setTimeout(()=>this.toast.success({detail:"Success",summary:'Password successfully Recovred.', duration:2000}),600)
        setTimeout(()=> this.router.navigate(['/login']),600)
        sessionStorage.clear();
     })

      }


    }


  }
}
