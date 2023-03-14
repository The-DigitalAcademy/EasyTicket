import { Component, OnInit } from '@angular/core';
import { ComplaintService } from 'src/app/service/complaint.service';

@Component({
  selector: 'app-monthlycomplain',
  templateUrl: './monthlycomplain.component.html',
  styleUrls: ['./monthlycomplain.component.scss']
})
export class MonthlycomplainComponent implements OnInit {

 
  complains:any
  q:any
  constructor(private complain:ComplaintService) { }

  ngOnInit(): void {




  this.complain.getMonthlyComplains().subscribe((res:any) => {

    this.complains=res;
    
    console.log(this.complains);

});



  }


}
