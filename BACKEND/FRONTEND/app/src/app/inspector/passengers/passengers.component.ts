import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { InspectorService } from 'src/app/service/inspector.service';


@Component({
  selector: 'app-passengers',
  templateUrl: './passengers.component.html',
  styleUrls: ['./passengers.component.scss']
})
export class PassengersComponent implements OnInit {

  constructor(private route: Router,private inspectorService:InspectorService,private formBuilder: FormBuilder) { }
  name:any;
  status:any;


  ngOnInit(): void {

    this.inspectorService.getAllUsers().subscribe((res:any) => {
      let result=res;
      this.name=res;
      console.log('result ',result)

    })
  }
 

}
