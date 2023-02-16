import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.scss']
})
export class ScannerComponent implements OnInit {

  params:any;
  constructor(route: ActivatedRoute) { 

    this.params = route.snapshot.params;
  }

  
  

  ngOnInit(): void {
  }

}
