import { Component, OnInit } from '@angular/core';
import { PassengerService } from 'src/app/service/passenger.service';

@Component({
  selector: 'app-loadtoken',
  templateUrl: './loadtoken.component.html',
  styleUrls: ['./loadtoken.component.scss']
})
export class LoadtokenComponent implements OnInit {
  src :any
  constructor(private passenger:PassengerService) { }
 proofuser:any
  ngOnInit(): void {


    let id=localStorage.getItem('id');
    console.log(id)

    this.passenger.getProofOfuser(id).subscribe((data)=>{
      this.proofuser= data;
      this.src = this.proofuser[0].proof;
  }
    )
}
}
