import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { JwtService } from 'src/app/service/jwt.service';
import { PassengerService } from 'src/app/service/passenger.service';


@Component({
  selector: 'app-searchplace',
  templateUrl: './searchplace.component.html',
  styleUrls: ['./searchplace.component.scss']
})
export class SearchplaceComponent implements OnInit {

  searchText:any;
  heroes = [];
  got: any;
  dropList: string[] = [];

  user = {
    id: '',
    fullname:'',
    email:'',
    amount:''

}

  constructor(private http: HttpClient,private router: Router,private jwtService : JwtService,private Passenger:PassengerService,private toast : NgToastService) {}

  ngOnInit(): void {

    
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
      this.got=this.dropList.push(item.formatted)

    });

  });


}
   
  }

 

  save(place:any)
  {

    //getting the user id
    this.user= this.jwtService.getDetails(localStorage.getItem('token')).data.rows[0];
    let id=this.user.id

    var saveplace={
      "user_id":id,
      "address":place
    }



    this.http.post('http://localhost:3001/postAddress',saveplace,{responseType:'text'})
    .subscribe((results)=>{
  
  //  this.toast.success({detail:"Success",summary:'Destination saved successfully', duration:2000})
        setTimeout(()=> this.router.navigate(['/destination']),1600)

      })

  }
  
}
