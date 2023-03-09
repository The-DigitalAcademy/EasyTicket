import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { InspectorService } from 'src/app/service/inspector.service';


@Component({
  selector: 'app-idashboard',
  templateUrl: './idashboard.component.html',
  styleUrls: ['./idashboard.component.scss']
})
export class IdashboardComponent implements OnInit {

  name = 'Angular 6';
  view: any[] = [500, 500];
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = "Country";
  showYAxisLabel = true;
  yAxisLabel = "Population";

  colorScheme = {
    domain: ["#5AA454"]
  };

    single: any[] = [
    {
      name: "Germany",
      value: 8940000
    },
    {
      name: "USA",
      value: 5000000
    },
    {
      name: "France",
      value: 7200000
    }
  ];
    public doughnutChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData: number[] = [350, 450, 100];
  chartOptions = {
    responsive: true
  };

  onSelect(event: any) {
    console.log(event);
  }




  //new

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  constructor(private route: Router,private inspectorService:InspectorService,private formBuilder: FormBuilder) {

    
   }
  active:any;
  suspended:any;
  inf=[];
  cat:any;

  act:any;
  susp:any;

user = {
  cat:'',
  status:'',
  created_at:'',
  count:''

}



  ngOnInit(): void {

   

      this.inspectorService.getStatus().subscribe((status:any) => {
        let result=status;

        console.log(result)
     
        this.suspended=status[0];
        this.active=status[1];
        // console.log('here   ',this.active)
      
      })
    
      
      this.inspectorService.getStatusDate().subscribe((res:any) => {
          let result=res;
          console.log('all ',result)
          this.user.cat=result[2].cat;
          this.act=result.filter((res: { cat: string; }) => res.cat===("active"));
          // console.log('ACTIVE ',this.act)
          this.susp=result.filter((res: { cat: string; }) => res.cat===("suspended"));
          
    
  
  })

  

  }


}
