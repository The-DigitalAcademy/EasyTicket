import { Component, OnInit } from '@angular/core';
import { ComplaintService } from 'src/app/service/complaint.service';

@Component({
  selector: 'app-weeklycomplain',
  templateUrl: './weeklycomplain.component.html',
  styleUrls: ['./weeklycomplain.component.scss']
})
export class WeeklycomplainComponent implements OnInit {

 
  complains:any
  q:any
  constructor(private complain:ComplaintService) { }

  ngOnInit(): void {




  this.complain.getWeeklyComplains().subscribe((res:any) => {

    this.complains=res;
    
    console.log(this.complains);

});



  }


}
