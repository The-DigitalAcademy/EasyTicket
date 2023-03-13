import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';

import { InspectorService } from 'src/app/service/inspector.service';

@Component({
  selector: 'app-active',
  templateUrl: './active.component.html',
  styleUrls: ['./active.component.scss']
})
export class ActiveComponent implements OnInit {
  q:any;
  constructor(private route: Router,private inspectorService:InspectorService,private formBuilder: FormBuilder,private toast :NgToastService) { }
  name:any;
  status:any;

  ngOnInit(): void {

    this.inspectorService.getAllUsersActive().subscribe((res:any) => {
      let result=res;
      this.name=res;
  })

}

suspend(id:any)
{

  this.inspectorService.suspendAccount(id).subscribe((res:any) => {

    this.toast.success({detail:"Success",summary:'Passenger suspended successfully.', duration:2000})
    
    this.inspectorService.getAllUsersActive().subscribe((res:any) => {
      let result=res;
      this.name=res;
  })


  });


}
}
