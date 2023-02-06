import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-company-infor',
  templateUrl: './company-infor.component.html',
  styleUrls: ['./company-infor.component.scss']
})
export class CompanyInforComponent implements OnInit {

  constructor(private http: HttpClient) { 


}  

ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}