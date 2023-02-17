import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PassengerService } from 'src/app/service/passenger.service';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { JwtService } from 'src/app/service/jwt.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  FormBuilder: any;
  file: any;
  init:any

  public profile!:any[];
 

  profForm = new FormGroup({
    
    fullname: new FormControl('')
  })

  submitted = false;

  constructor(private jwtService : JwtService,private Passenger:PassengerService,private route: ActivatedRoute,
    private router: Router,private http:HttpClient, private fb: FormBuilder) { 

      this.user= this.jwtService.getDetails(localStorage.getItem('token')).data.rows[0];
    this.init = this.user.fullname.charAt(0).toUpperCase(); 

      this.profForm.setValue({
        fullname: this.user.fullname
      })
    }

    myForm() {

      this.profForm = this.fb.group({

      
        fullname: ['', [Validators.required ]]

      })

     
    }

    user = {
      id: '',
      fullname:'',
      email:'',
      amount:''
  
  }

  

  ngOnInit(): void {

    
   
  }


  onSubmit(value:any)
  {

    let id = this.user.id;


    this.Passenger.updateProfile(id,value).subscribe((next:any) => {
      this.router.navigate(['/p-profile']);
      this.submitted = false;
      console.log(id+''+value)
    })

  }

}
