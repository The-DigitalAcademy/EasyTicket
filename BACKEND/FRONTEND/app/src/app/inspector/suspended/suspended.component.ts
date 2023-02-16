import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { InspectorService } from 'src/app/service/inspector.service';


@Component({
  selector: 'app-suspended',
  templateUrl: './suspended.component.html',
  styleUrls: ['./suspended.component.scss']
})
export class SuspendedComponent implements OnInit {

  constructor(private route: Router,private inspectorService:InspectorService,private formBuilder: FormBuilder) { }
  name:any;
  persons=[];
  per:any
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


    this.inspectorService.getAllUsers().subscribe((res:any) => {
     


      this.persons=res;
      // this.users.fullname=result.fullname;
      // console.log( this.users.fullname);
      //console.log(this.persons)
      

   

    })
  }

}
