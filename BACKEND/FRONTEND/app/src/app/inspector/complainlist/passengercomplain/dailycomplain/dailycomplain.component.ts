import { Component, OnInit } from '@angular/core';
import { ComplaintService } from 'src/app/service/complaint.service';

@Component({
  selector: 'app-dailycomplain',
  templateUrl: './dailycomplain.component.html',
  styleUrls: ['./dailycomplain.component.scss']
})
export class DailycomplainComponent implements OnInit {

 
  complains:any
  q:any
  constructor(private complain:ComplaintService) { }

  ngOnInit(): void {




  this.complain.getDailyComplains().subscribe((res:any) => {

    this.complains=res;
    
    console.log(this.complains);

});



  }

}
