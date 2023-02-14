import { Component, OnInit } from '@angular/core';
import { JwtService } from 'src/app/service/jwt.service';
import { PassengerService } from 'src/app/service/passenger.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-p-profile',
  templateUrl: './p-profile.component.html',
  styleUrls: ['./p-profile.component.scss']
})
export class PProfileComponent implements OnInit {

  
  

  constructor(private jwtService : JwtService,private Passenger:PassengerService,private route: ActivatedRoute,
    private router: Router,private http:HttpClient) { }

  wallet:any
  init:any
  id!:number;
  fullname!: string;
  

 

  user = {
    id: '',
    fullname:'',
    email:'',
    amount:''

}


  ngOnInit(): void {

    this.user= this.jwtService.getDetails(localStorage.getItem('token')).data.rows[0];
    this.init = this.user.fullname.charAt(0).toUpperCase();   //display one character of fullname

    
    // console.log(this.user)

    // this.updateProfile(this.user);

  }
 

  // updateProfile(){

  // let data = {
  //     fullname: this.user.fullname
  
  //   }
  //   console.log(data)
   

  //   let id = this.user.id;
  //   console.log(id)

  //   this.Passenger.updateProfile(id,data).subscribe((res:any) => {
  //     console.log('name',data)
  //     console.log('the id',id)
  //    let resu = res;
  //     console.log('display',resu)
  //   })

    
  // }

  // cancel() {
  //   this.router.navigate(['/p-profile']);
  // }

//   save() {
//     let data = {
//       fullname: this.user.fullname
  
//     }
//     this.updateProfile(data)
//     console.log(this.user.id)
//     console.log(data)
// this.user.fullname = this.fullname;
     
// this.http.patch(this.baseUrl +"/updateProfile/"+this.user.id,data);


//       // this.gotoList();
//   }

  // gotoList() {
  //   if (this.user) {
  //     this.router.navigate(['/p-profile', {term: this.user.fullname}]);
  //   } else {
  //     this.router.navigate(['/p-profile']);
  //   }
  // }


}
