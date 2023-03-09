import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { InspectorService } from 'src/app/service/inspector.service';
import { NgToastService } from 'ng-angular-popup';


@Component({
  selector: 'app-passengers',
  templateUrl: './passengers.component.html',
  styleUrls: ['./passengers.component.scss']
})
export class PassengersComponent implements OnInit {

  constructor(private route: Router,private inspectorService:InspectorService,private formBuilder: FormBuilder,private toast :NgToastService) { }
  name:any;
  status:any;
  q:any;

  ngOnInit(): void {

    this.inspectorService.getAllUsers().subscribe((res:any) => {
      let result=res;
      this.name=res;
    

    })
  }

  active(id:any)
  {

    this.inspectorService.activateAccount(id).subscribe((res:any) => {


      this.toast.success({detail:"Success",summary:'Passenger activated successfully.', duration:2000})
      
      this.inspectorService.getAllUsers().subscribe((res:any) => {
        let result=res;
        this.name=res;
      
  
      })

    });


  }

  suspend(id:any)
  {

    this.inspectorService.suspendAccount(id).subscribe((res:any) => {

      this.toast.success({detail:"Success",summary:'Passenger suspended successfully.', duration:2000})
      
      this.inspectorService.getAllUsers().subscribe((res:any) => {
        let result=res;
        this.name=res;
      
  
      })


    });


  }
 

}
