import { Component, OnInit } from '@angular/core';
import { PassengerService } from 'src/app/service/passenger.service';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { InspectorService } from 'src/app/service/inspector.service';
import { HttpClient } from '@angular/common/http';
import { NgToastService } from 'ng-angular-popup';
import { Router } from '@angular/router';


@Component({
  selector: 'app-loadtoken',
  templateUrl: './loadtoken.component.html',
  styleUrls: ['./loadtoken.component.scss']
})
export class LoadtokenComponent implements OnInit {
  src :any
  constructor(private passenger:PassengerService,private inspector:InspectorService,private http:HttpClient,private toast:NgToastService,private router:Router) { }
 proofuser:any

 form: FormGroup = new FormGroup({
   
  token: new FormControl(''),

});
  ngOnInit(): void {


    let id=localStorage.getItem('id');
    console.log(id)

    this.passenger.getProofOfuser(id).subscribe((data)=>{
      this.proofuser= data;
      this.src = this.proofuser[0].proof;
   console.log(this.proofuser[0].user_id);
  }
    )
}

onSubmit(data:any){

  let id=this.proofuser[0].user_id;

 var info=
 {
 id:id,
 input:data.token
  
}

 console.log(info)


  this.http.put('http://localhost:3001/loadTokens',info, {responseType:'text'})
  .subscribe((results)=>{ 
    
    
    this.toast.success({detail:"Success",summary:'Tokens loaded successfully.', duration:2000})
  

    this.form.reset();
   
  
  })







}
}


