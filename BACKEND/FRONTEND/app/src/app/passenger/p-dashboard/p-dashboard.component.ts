import { Component, OnInit } from '@angular/core';
import { JwtService } from 'src/app/service/jwt.service';
import { PassengerService } from 'src/app/service/passenger.service';
import { take, startWith, map } from 'rxjs/operators';
import { interval } from 'rxjs';
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

points:any;
potion:any;
tripno:any;
trips:any;
uploadno:any;
uploads:any;
complainno:any;
complains:any;
positives:any

  ngOnInit(): void {

    this.user= this.jwtService.getDetails(localStorage.getItem('token')).data.rows[0];
    this.init = this.user.fullname.charAt(0).toUpperCase();   //display one character of fullname
    this.single=this.user.fullname.split(' ').at(0);   //find space on fullname
    let id=this.user.id

//get trips taken
this.Passenger.getUserUsertrip(id).subscribe((data)=>{

  this.tripno=data;
  this.trips=this.tripno[0].notrip;




})

//get number of uploads
this.Passenger.getUserUploads(id).subscribe((data)=>{

  this.uploadno=data;
  this.uploads=this.uploadno[0].paymentcount;


})

//get number of complains
this.Passenger.getUserComplain(id).subscribe((data)=>{

  this.complainno=data;
  this.complains=this.complainno[0].complaincount;


})



//wallet balance per user
    this.Passenger.getToken(id).subscribe((data)=>{

      this.wallet= data;

      this.Passenger.getUserUsedTokens(id).subscribe((next:any) => {

        this.points=next[0].points;
        this.potion=(this.points + this.wallet[0].amount);
        if(this.points==null)
        {
          
          this.positives='0.00';
          
  
        }else
        {
  
          this.positives= this.points;
  
        }
      
    })





    
      })



      console.clear();

  }



}
