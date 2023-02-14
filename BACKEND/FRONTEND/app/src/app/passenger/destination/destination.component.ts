import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { JwtService } from 'src/app/service/jwt.service';
import { PassengerService } from 'src/app/service/passenger.service';

@Component({
  selector: 'app-destination',
  templateUrl:'./destination.component.html',
  styleUrls: ['./destination.component.scss']
})
export class DestinationComponent implements OnInit {

  searchText = '';
  dropList: string[] = [];
  constructor(private http: HttpClient,private passenger:PassengerService,private jwtService : JwtService,private router: Router,private toast : NgToastService) {}
  user = {
    id: '',
    fullname:'',
    email:'',
    amount:''

}

info:any;
inf=[];

  ngOnInit(): void {


    this.user= this.jwtService.getDetails(localStorage.getItem('token')).data.rows[0];
    let id=this.user.id

   //display all user saved places
   this.passenger.getUserPlaces(id).subscribe(res=>{
    this.info=res;
    this.inf=this.info.data;
    console.log(res);
    
  })





  }
  log(value: any) {

    this.dropList = []
    // setTimeout(() => {
    //   alert("Alert activated")
    // }, 1000);
    
if(this.searchText!='')
{



  this.http
  .get(
    'https://api.opencagedata.com/geocode/v1/json?q='+this.searchText+
      '&key=a2580d3bbb4940d9bfa47c349d3cac3a'
  )
  .subscribe((data: any) => {
    const { results } = data;

    results.forEach((item: any) => {
      
      this.dropList.push(item.formatted)
    });

  });


}
   
  }

  delete(value:any)
  {

    this.passenger.deleteAddress(value).subscribe(res=>{
    
      this.toast.success({detail:"Warning",summary:'Destination removed successfully', duration:2000})
     // setTimeout(()=> this.router.navigate(['/destination']),1600)

    this.user= this.jwtService.getDetails(localStorage.getItem('token')).data.rows[0];
    let id=this.user.id

   //display all user saved places
   this.passenger.getUserPlaces(id).subscribe(res=>{
    this.info=res;
    this.inf=this.info.data;
    console.log(res);

      })
})
     }

  

  
}
