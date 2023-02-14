import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { InspectorService } from 'src/app/service/inspector.service';

@Component({
  selector: 'app-idashboard',
  templateUrl: './idashboard.component.html',
  styleUrls: ['./idashboard.component.scss']
})
export class IdashboardComponent implements OnInit {

  constructor(private route: Router,private inspectorService:InspectorService,private formBuilder: FormBuilder) { }
  active:any;
  suspended:any;
  inf=[];



  ngOnInit(): void {

   

      this.inspectorService.getStatus().subscribe((status:any) => {
        this.active=status[0];
        this.suspended=status[1];
        console.log('active : ',this.active);
        console.log('suspended : ',this.suspended)
  
        // if(status='active'){
        //   console.log('active',status);
        // }else{
          // console.log('suspended ',status);
        // }
      })
    
  
  }

}
