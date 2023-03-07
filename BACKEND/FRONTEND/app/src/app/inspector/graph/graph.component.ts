
import { Component, ViewChild,OnInit } from "@angular/core";
import { InspectorService } from 'src/app/service/inspector.service';
import { FormBuilder } from '@angular/forms';
import { ChartComponent } from "ng-apexcharts";

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
  ApexFill,
  ApexDataLabels,
  ApexLegend
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  fill: ApexFill;
  legend: ApexLegend;
  dataLabels: ApexDataLabels;
};

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit {

  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>|any;

  name=[];
  dates:any;
  temp:any;
  temp2:any;
  temp3:any;
  
  mydata = new Array();
  mydata2 = new Array();
  mydata3 = new Array();

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

  constructor(private inspectorService:InspectorService,private formBuilder: FormBuilder) {
    this.chartOptions = {
      series: [this.act,this.susp],
      chart: {
        width: 380,
        type: "donut"
      },
      dataLabels: {
        enabled: false
      },
      fill: {
        type: "gradient"
      },
      legend: {
        formatter: function(val: string, opts: { w: { globals: { series: { [x: string]: string; }; }; }; seriesIndex: string | number; }) {
          return val + " - " + opts.w.globals.series[opts.seriesIndex];
        }
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
  }
 
  

  ngOnInit(): void {

   

    this.inspectorService.getStatus().subscribe((status:any) => {
      let result=status;

      // console.log('hi there ',result)
   
      this.suspended=status[0];
      this.active=status[1];
      // console.log('here   ',this.active)
    
    })
    
    this.inspectorService.getStatusDate().subscribe((res:any) => {
        let result=res;
        console.log('all ',result)
        this.user.cat=result[2].cat;
        this.act=result.filter((res: { cat: string; }) => res.cat===("active"));
      
        this.susp=result.filter((res: { cat: string; }) => res.cat===("suspended"));
     

        //  if(this.user.cat=='active'){

          result.forEach((element: { to_char: any; }) => {
            let temp2 = (element.to_char)
            
            this.mydata2.push(temp2)
           
          });
        // }

        //  suspended number
          this.susp.forEach((element: { count: any; }) => {
            let temp = (element.count)
            
            this.mydata.push(temp)
           
          });

          this.act.forEach((element: { count: any; }) => {
            let temp3 = (element.count)
            
            this.mydata3.push(temp3)
           
          });
     
      })
      //dates
      this.temp2 = this.mydata2
      console.log('dates :',this.temp2 )
   


    //counting the number of users suspended
    // this.temp = this.mydata
    // console.log('susp ',this.temp )

    //counting the number of users active
    // this.temp3 = this.mydata3
    // console.log('act ',this.temp3 )

    
  

}
}
