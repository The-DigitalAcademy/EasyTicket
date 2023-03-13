import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { InspectorService } from 'src/app/service/inspector.service';
import { NgToastService } from 'ng-angular-popup';


@Component({
  selector: 'app-suspended',
  templateUrl: './suspended.component.html',
  styleUrls: ['./suspended.component.scss']
})
export class SuspendedComponent implements OnInit {

  constructor(private route: Router,private inspectorService:InspectorService,private formBuilder: FormBuilder,private toast :NgToastService) { }
  name:any;
  persons=[];
  per:any
  q:any
  suspended:any;

   users = {
    fullname: '',
    status: '',
    amount: ''
  }

  statusForm: FormGroup = new FormGroup({
    status: new FormControl('')
  })
 

  ngOnInit(): void {


    this.inspectorService.getAllUsers().subscribe(res=>{
      this.per=res;
      // console.log(this.per);
  
     })


    this.inspectorService.getAllUsersInActive().subscribe((res:any) => {
     
      this.name=res;
    })
  }

  active(id:any)
  {

    this.inspectorService.activateAccount(id).subscribe((res:any) => {


      this.toast.success({detail:"Success",summary:'Passenger activated successfully.', duration:2000})
      
      
    this.inspectorService.getAllUsersInActive().subscribe((res:any) => {
     
      this.name=res;
    })
    });


  }

}
