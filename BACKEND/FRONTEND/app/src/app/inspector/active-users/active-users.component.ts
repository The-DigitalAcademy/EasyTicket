import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { InspectorService } from 'src/app/service/inspector.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.scss']
})
export class ActiveUsersComponent implements OnInit {

  constructor(private route: Router,private inspectorService:InspectorService,private formBuilder: FormBuilder) { }
  name:any;
  status:any;

  ngOnInit(): void {
    this.inspectorService.getAllUsers().subscribe((res:any) => {
      let result=res;
      this.name=res;
      // console.log(this.name)

    })
  }

}
