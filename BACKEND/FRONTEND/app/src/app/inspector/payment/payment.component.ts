import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InspectorService } from 'src/app/service/inspector.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  constructor( private inspectorService:InspectorService,private router:Router) { }
  info:any;
  inf=[];
  
  ngOnInit(): void {

this.inspectorService.getAllproof().subscribe(res=>{
this.info=res;
this.inf=this.info.data;
console.log(res);


  })
}

view(items:any)
{


 this.router.navigate(['/loadtoken']);
 localStorage.setItem('id',items.id);


}

}

  
