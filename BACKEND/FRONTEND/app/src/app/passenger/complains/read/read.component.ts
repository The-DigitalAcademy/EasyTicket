import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { NgxSpinnerService } from 'ngx-spinner';
import { PassengerService } from 'src/app/service/passenger.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent implements OnInit {
params:any
  complaints: any;
  cdate:any;
  message: any;
  constructor(route: ActivatedRoute,private Passenger:PassengerService,
    private router: Router, 
    private spinner: NgxSpinnerService,
    private toast : NgToastService,) {

    this.params = route.snapshot.params;

   }

  ngOnInit(): void {

  

    //get number of complains
this.Passenger.readComplain(this.params.id).subscribe((data)=>{

 this.complaints=data;
  this.message=this.complaints[0].complains;
  this.cdate=this.complaints[0].created_at;

})
  }
  remove()
  {

    this.spinner.show();
    this.Passenger.deleteComplain(this.params.id).subscribe((data)=>{

      setTimeout(()=>this.spinner.hide(),600)
      setTimeout(()=>this.toast.success({detail:"Success",summary:'Complain successfully removed.', duration:2000}),700)
      setTimeout(()=> this.router.navigate(['/complains']),1600)
     
     })
  }

}
