import { Component, OnInit } from '@angular/core';
import { JwtService } from 'src/app/service/jwt.service';
import { PassengerService } from 'src/app/service/passenger.service';

@Component({
  selector: 'app-p-dashboard',
  templateUrl: './p-dashboard.component.html',
  styleUrls: ['./p-dashboard.component.scss']
})
export class PDashboardComponent implements OnInit {

  constructor(private jwtService : JwtService,private Passenger:PassengerService) { }
  init:any
  single:any
  wallet:any


  user = {
    id: '',
    fullname:'',
    email:'',
    amount:''

}

  ngOnInit(): void {

    this.user= this.jwtService.getDetails(localStorage.getItem('token')).data.rows[0];
    this.init = this.user.fullname.charAt(0).toUpperCase();   //display one character of fullname
    this.single=this.user.fullname.split(' ').at(0);   //find space on fullname
    let id=this.user.id



//wallet balance per user
    this.Passenger.getToken(id).subscribe((data)=>{
      this.wallet= data;
    
      })



  }

}
