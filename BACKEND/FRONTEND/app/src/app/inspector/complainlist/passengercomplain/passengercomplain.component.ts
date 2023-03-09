import { Component, OnInit } from '@angular/core';
import { ComplaintService } from 'src/app/service/complaint.service';

@Component({
  selector: 'app-passengercomplain',
  templateUrl: './passengercomplain.component.html',
  styleUrls: ['./passengercomplain.component.scss']
})
export class PassengercomplainComponent implements OnInit {

  complains:any
  q:any
  constructor(private complain:ComplaintService) { }

  ngOnInit(): void {




  this.complain.getComplains().subscribe((res:any) => {

    this.complains=res;
    
    console.log(this.complains);

});



  }

}
