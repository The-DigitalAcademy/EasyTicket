import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { InspectorService } from 'src/app/service/inspector.service';

@Component({
  selector: 'app-active',
  templateUrl: './active.component.html',
  styleUrls: ['./active.component.scss']
})
export class ActiveComponent implements OnInit {

  constructor(private route: Router,private inspectorService:InspectorService,private formBuilder: FormBuilder) { }
  name:any;
  status:any;

  ngOnInit(): void {

    this.inspectorService.getAllUsers().subscribe((res:any) => {
      let result=res;
      this.name=res;
  })

}
}
