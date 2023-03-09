import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { InspectorService } from 'src/app/service/inspector.service';
import { PassengerService } from 'src/app/service/passenger.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {
params:any
  constructor(route: ActivatedRoute,private inspectorService:InspectorService,private formBuilder: FormBuilder,private toast :NgToastService,private Passenger:PassengerService) { 
    
    this.params = route.snapshot.params;
  }
trans:any
total:any
wallet:any
len:any
q:any
  ngOnInit(): void {



    this.inspectorService.getTransactionbyId(this.params.id).subscribe(data => {


      this.Passenger.getUserUsedTokens(this.params.id).subscribe((next:any) => {

       this.total=next;
       this.wallet=this.total[0].points
     
      
    })
      this.trans=data;
      this.len=this.trans.length;

    });
  }

}
