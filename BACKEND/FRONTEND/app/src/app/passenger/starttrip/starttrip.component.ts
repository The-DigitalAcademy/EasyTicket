import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JwtService } from 'src/app/service/jwt.service';
import { PassengerService } from 'src/app/service/passenger.service';
@Component({
  selector: 'app-starttrip',
  templateUrl: './starttrip.component.html',
  styleUrls: ['./starttrip.component.scss']
})
export class StarttripComponent implements OnInit {
  params: any;

  init:any
  single:any
  wallet:any


  user = {
    id: '',
    fullname:'',
    email:'',
    amount:''
  }
 
  constructor(route: ActivatedRoute,private jwtService : JwtService,private Passenger:PassengerService) { 
    
    this.params = route.snapshot.params;
  }

  ngOnInit(): void {
    this.user= this.jwtService.getDetails(localStorage.getItem('token')).data.rows[0];
    this.init = this.user.fullname.charAt(0).toUpperCase();   //display one character of fullname
    this.single=this.user.fullname.split(' ').at(0);   //find space on fullname
    let id=this.user.id
    console.log(this.params)
  }

}
