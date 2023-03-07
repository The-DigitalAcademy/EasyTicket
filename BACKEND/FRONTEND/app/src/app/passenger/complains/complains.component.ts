import { Component, OnInit } from '@angular/core';
import { JwtService } from 'src/app/service/jwt.service';
import { PassengerService } from 'src/app/service/passenger.service';

@Component({
  selector: 'app-complains',
  templateUrl: './complains.component.html',
  styleUrls: ['./complains.component.scss']
})
export class ComplainsComponent implements OnInit {

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


complaints:any;

  ngOnInit(): void {
    this.user= this.jwtService.getDetails(localStorage.getItem('token')).data.rows[0];
    this.init = this.user.fullname.charAt(0).toUpperCase();   //display one character of fullname
    this.single=this.user.fullname.split(' ').at(0);   //find space on fullname
    let id=this.user.id


//get number of complains
this.Passenger.getUserComplainByUserid(id).subscribe((data)=>{

  this.complaints=data;

})




  }

}
