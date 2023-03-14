// import { Component, OnInit, ViewChild } from '@angular/core';
// import { Router } from '@angular/router';
// import { FormBuilder } from '@angular/forms';
// import { NgToastService } from 'ng-angular-popup';
// import { InspectorService } from 'src/app/service/inspector.service';

// import { ApexNonAxisChartSeries, ApexResponsive,ChartComponent,ApexAxisChartSeries,ApexChart,ApexXAxis,ApexDataLabels, ApexStroke,ApexMarkers,ApexYAxis,ApexGrid,ApexTitleSubtitle,ApexLegend,ApexFill, ApexTooltip, ApexPlotOptions} from "ng-apexcharts";


// export type ChartOptions = {
//   series: ApexAxisChartSeries;
//   chart: ApexChart;
//   xaxis: ApexXAxis;
//   stroke: ApexStroke;
//   dataLabels: ApexDataLabels;
//   markers: ApexMarkers;
//   colors: string[];
//   yaxis: ApexYAxis;
//   grid: ApexGrid;
//   legend: ApexLegend;
//   title: ApexTitleSubtitle;
//   plotOptions: ApexPlotOptions;
//   fill: ApexFill;
//   tooltip: ApexTooltip;
// };



// @Component({
//   selector: 'app-idashboard',
//   templateUrl: './idashboard.component.html',
//   styleUrls: ['./idashboard.component.scss']
// })
// export class IdashboardComponent implements OnInit {
//   dates:any;
//   temp:any;
//   temp2:any;
//   temp3:any;
  
  
//   mydata = new Array();
//   mydata2 = new Array();
//   mydata3 = new Array();

//   @ViewChild("chart") chart!: ChartComponent;
//   public chartOptions!: Partial<ChartOptions> | any;

//   constructor(private route: Router,private inspectorService:InspectorService,private formBuilder: FormBuilder) {

    
//    }
//   active:any;
//   suspended:any;
//   inf=[];
//   cat:any;

//   act:any;
//   susp:any;

// user = {
//   cat:'',
//   status:'',
//   created_at:'',
//   count:''

// }



//   ngOnInit(): void {

   

//       this.inspectorService.getStatus().subscribe((status:any) => {
//         let result=status;

//         // console.log(result)
     
//         this.suspended=status[0];
//         this.active=status[1];
//         // console.log('here   ',this.active)
      
//       })
    
      
//       this.inspectorService.getStatusDate().subscribe((res:any) => {
//           let result=res;
//           console.log('all ',result)
//           this.user.cat=result[2].cat;
//           this.act=result.filter((res: { cat: string; }) => res.cat===("active"));
//           // console.log('ACTIVE ',this.act)
//           this.susp=result.filter((res: { cat: string; }) => res.cat===("suspended"));
          

//           //active
//           this.act.forEach((element: { count: string; }) => {
//             let temp = parseInt(element.count)
//             this.mydata.push(temp)
            
            
//           });

//           //for date
//       result.forEach((element: { to_char: string; })=> {
//         let temp3 = String(element.to_char)
//         this.mydata3.push(temp3)
        
//       });

//       //suspended
//       this.susp.forEach((element: { cat: string; }) => {
//         let temp2 = parseInt(element.cat)
//         this.mydata2.push(temp2)
        
//       });
  
//   })

  

//   }



//        //dates
//        this.temp3=this.mydata;
//       //  console.log('dates ',this.temp2 )
    


//      //counting the number of users suspended
//      this.temp = this.mydata
//     //  console.log('susp ',this.temp )

//      //counting the number of users active
//      this.temp3 = this.mydata3
//     //  console.log('act ',this.temp3 )

//       this.chartOptions = {
//         series: [
//           {
//             name: "Suspended",
//             data: this.temp
//           },
//           {
//             name: "Active",
//             data: this.temp3
//           }
//         ],
//         chart: {
//           height: 350,
//           type: "line",
//           dropShadow: {
//             enabled: true,
//             color: "#000",
//             top: 18,
//             left: 7,
//             blur: 10,
//             opacity: 0.2
//           },
//           toolbar: {
//             show: false
//           }
//         },
//         colors: ["#", "#545454"],
//         dataLabels: {
//           enabled: true
//         },
       
//         title: {
//           text: "Active and Suspended passengers",
//           align: "left",
          
//         },
//         grid: {
//           borderColor: "#FFFFFF",
//           row: {
//             colors: [ "transparent"], // takes an array which will be repeated on columns
//             opacity: 0.5
//           }
//         },
//         markers: {
//           size: 1
//         },
//         xaxis: 
//         {
//           categories: this.temp2,
//           title: {
//             text: "Monthly"
//           }
//         },
//         yaxis: {
//           title: {
//             text: "the number of passengers"
//           },
//           min: 5,
//           max: 40
//         },
//         legend: {
//           position: "top",
//           horizontalAlign: "right",
//           floating: true,
//           offsetY: -25,
//           offsetX: -5
//         }
//       };
    
  



// }



import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { InspectorService } from 'src/app/service/inspector.service';
import {   ApexTheme,ApexForecastDataPoints,ApexNonAxisChartSeries, ApexResponsive,ChartComponent,ApexAxisChartSeries,ApexChart,ApexXAxis,ApexDataLabels, ApexStroke,ApexMarkers,ApexYAxis,ApexGrid,ApexTitleSubtitle,ApexLegend,ApexFill, ApexTooltip, ApexPlotOptions} from "ng-apexcharts";


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

// export type ChartOption = {
//   series: ApexNonAxisChartSeries;
//   chart: ApexChart;
//   responsive: ApexResponsive[];
//   labels: any;
//   fill: ApexFill;
//   legend: ApexLegend;
//   dataLabels: ApexDataLabels;
// };
export type ChartOption = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  theme: ApexTheme;
  title: ApexTitleSubtitle;
};


// export type ChartOptio = {
//   series: ApexAxisChartSeries;
//   chart: ApexChart;
//   dataLabels: ApexDataLabels;
//   stroke: ApexStroke;
//   xaxis: ApexXAxis;
//   yaxis: ApexYAxis;
//   title: ApexTitleSubtitle;
//   markers: ApexMarkers;
//   colors: string[];
//   fill: ApexFill;
//   forecastDataPoints: ApexForecastDataPoints;
//   legend: ApexLegend;
// };


@Component({
  selector: 'app-idashboard',
  templateUrl: './idashboard.component.html',
  styleUrls: ['./idashboard.component.scss']
})
export class IdashboardComponent implements OnInit {

  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions!: Partial<ChartOptions> | any;
  public chartOption!: Partial<ChartOption> | any;
  // public chartOptio!: Partial<ChartOption> | any;

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

  temp4:any;
  temp5:any;
  mydata4 = new Array();
  mydata5 = new Array();

  act:any;
  susp:any;
  passengers:any
  allpassengers:any
user = {
  cat:'',
  status:'',
  created_at:'',
  count:''

}

newActive:any;
newSuspended:any;

  ngOnInit(): void {

    this.inspectorService.getSuspended().subscribe((suspended:any) => {
      let result=suspended;
      this.newSuspended=result[0];
      console.log('new',this.newSuspended)
    })

    this.inspectorService.getActive().subscribe((active:any) => {
      let result=active;
      this.newActive=result[0];
      console.log('new',this.newActive)
    })

      this.inspectorService.getStatusDate().subscribe((status:any) => {
        let result=status;
        this.active=result.filter((res: { cat: string; }) => res.cat===("active"));
        console.log('ACTIVE ',this.active)
        this.suspended=result.filter((res: { cat: string; }) => res.cat===("suspended"));
        console.log('SUSPENDED ',this.suspended)

    //  console.log('result',result)
        // this.suspended=status.filter((res: { cat: string; }) => res.cat===("suspended"));
       
        // this.active=status[1];
        // console.log('here   ',this.active)
      // console.log('suspended ',this.suspended.count)

        
      //pie chart

let active= parseInt(this.newActive.count);
let suspend= parseInt(this.newSuspended.count);

      this.chartOption = {
        series: [suspend,active],
        chart: {
          width: "100%",
          height:"900",
          type: "pie"
        },
        labels: [
          "Suspended",
          "Active"
        ],
        theme: {
          monochrome: {
            enabled: true
          }
        },
        title: {
          text: "Propotion of Active And Suspended Passengers"
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

      })

      //get the no of passengers
      this.inspectorService.getNopassenger().subscribe((res:any) => {


        this.passengers=res;

        this.allpassengers=this.passengers[0].passengertot
        console.log(this.passengers[0].passengertot)

      });
      
      this.inspectorService.getStatusDate().subscribe((res:any) => {
          let result=res;
          // console.log('all ',result)
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
        // console.log('dates ',this.temp2 )
     


      //counting the number of users suspended
      this.temp = this.mydata
      // console.log('susp ',this.temp )

      //counting the number of users active
      this.temp3 = this.mydata3
      // console.log('act ',this.temp3 )

      this.chartOptions = {
        series: [
          {
            name: "Active",
            data: this.temp3
          },
          {
            name: "Suspended",
            data: this.temp
          }
        ],
        chart: {
          height: 350,
          type: "bar",
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
        colors: ["#", "#"],
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
          borderColor: "",
          row: {
            colors: [ "transparent"], // takes an array which will be repeated on columns
            opacity: 0.5
          }
        },
        markers: {
          size: 4
        },
        xaxis: 
        {
          categories: this.mydata2,
          title: {
            text: "Month(s)"
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