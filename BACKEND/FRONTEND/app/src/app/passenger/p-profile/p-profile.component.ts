import { Component, OnInit } from '@angular/core';
import { JwtService } from 'src/app/service/jwt.service';
import { PassengerService } from 'src/app/service/passenger.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import Validation from './validation';

@Component({
  selector: 'app-p-profile',
  templateUrl: './p-profile.component.html',
  styleUrls: ['./p-profile.component.scss']
})
export class PProfileComponent implements OnInit {


  wallet:any
  init:any
  id!:number;
  fullname!: string;
  
  user = {
    id: '',
    fullname:'',
    email:'',
    amount:''
}




constructor(private jwtService : JwtService,private Passenger:PassengerService,private route: ActivatedRoute,
private router: Router,private http:HttpClient,private formBuilder: FormBuilder) { }


  
form: FormGroup = new FormGroup({
   
  fullname: new FormControl('')
});

form1: FormGroup = new FormGroup({
   
  password: new FormControl(''),
  confirmPassword: new FormControl('')
});

submitted = false;

modaldisappear:any;
  ngOnInit(): void {



    this.form = this.formBuilder.group(
      {
        fullname: ['', [Validators.required,
                    Validators.minLength(3),Validators.pattern("^(?=.{1,40}$)[a-zA-Z ]+(?:[-'\s][a-zA-Z ]+)*$")]
                  ],
  
      },
     
    );


   

    this.user= this.jwtService.getDetails(localStorage.getItem('token')).data.rows[0];
    this.init = this.user.fullname.charAt(0).toUpperCase();   //display one character of fullname
  
    this.form.setValue({
      fullname: this.user.fullname
    })
   
    
  }

  
  update(value:any)
  {

    this.submitted = true;

    if(value.fullname!='')
    {
        let id = this.user.id;
        this.Passenger.updateProfile(id,value).subscribe((next:any) => {
        this.router.navigate(['/p-profile']);
        this.modaldisappear="modal";

      
      })
      
    }

   
   

  }


  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
}
