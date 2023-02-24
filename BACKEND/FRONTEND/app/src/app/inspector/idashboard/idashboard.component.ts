import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { InspectorService } from 'src/app/service/inspector.service';
import {ChartComponent,ApexAxisChartSeries,ApexChart,ApexXAxis,ApexDataLabels, ApexStroke,ApexMarkers,ApexYAxis,ApexGrid,ApexTitleSubtitle,ApexLegend,ApexFill, ApexTooltip, ApexPlotOptions} from "ng-apexcharts";


export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  markers: ApexMarkers;
  colors: string[];
  yaxis: ApexYAxis;
  grid: ApexGrid;
  legend: ApexLegend;
  title: ApexTitleSubtitle;
  plotOptions: ApexPlotOptions;
  fill: ApexFill;
  tooltip: ApexTooltip;
};

@Component({
  selector: 'app-idashboard',
  templateUrl: './idashboard.component.html',
  styleUrls: ['./idashboard.component.scss']
})
export class IdashboardComponent implements OnInit {

  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions!: Partial<ChartOptions> | any;
  name=[];
  dates:any;
  temp:any;
  temp2:any;
  temp3:any;
  
  mydata = new Array();
  mydata2 = new Array();
  mydata3 = new Array();

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

}


  ngOnInit(): void {

   

      this.inspectorService.getStatus().subscribe((status:any) => {
     
        this.active=status[0];
        this.suspended=status[1];
      
      })
      
      this.inspectorService.getStatusDate().subscribe((res:any) => {
          let result=res;
          console.log(result)
          this.user.cat=result[2].cat;
          this.act=result.filter((res: { cat: string; }) => res.cat===("active"));
          // console.log('ACTIVE ',this.act)
          this.susp=result.filter((res: { cat: string; }) => res.cat===("suspended"));
          // console.log('SUSPENDED ',this.susp)



        //   this.susp=result[3].cat;
        //  console.log('this',this.user.cat)
        //  console.log('check',this.susp)
  
           if(this.user.cat=='active'){

            result.forEach((element: { to_char: any; }) => {
              let temp2 = (element.to_char)
              
              this.mydata2.push(temp2)
             
            });
          }

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
        console.log('dates ',this.temp2 )
     


      //counting the number of users suspended
      this.temp = this.mydata
      console.log('susp ',this.temp )

      //counting the number of users active
      this.temp3 = this.mydata3
      console.log('act ',this.temp3 )

      this.chartOptions = {
        series: [
          {
            name: "Suspended",
            data: this.temp
          },
          {
            name: "Active",
            data: this.temp3
          }
        ],
        chart: {
          height: 350,
          type: "line",
          dropShadow: {
            enabled: true,
            color: "#000",
            top: 18,
            left: 7,
            blur: 10,
            opacity: 0.2
          },
          toolbar: {
            show: false
          }
        },
        colors: ["#", "#545454"],
        dataLabels: {
          enabled: true
        },
        stroke: {
          curve: "smooth"
        },
        title: {
          text: "Active and Suspended passengers",
          align: "left",
          
        },
        grid: {
          borderColor: "#FFFFFF",
          row: {
            colors: [ "transparent"], // takes an array which will be repeated on columns
            opacity: 0.5
          }
        },
        markers: {
          size: 1
        },
        xaxis: {
          categories: this.mydata2,
          title: {
            text: "Monthly"
          }
        },
        yaxis: {
          title: {
            text: "the number of passengers"
          },
          min: 5,
          max: 40
        },
        legend: {
          position: "top",
          horizontalAlign: "right",
          floating: true,
          offsetY: -25,
          offsetX: -5
        }
      };
    
  
  }

  

}
