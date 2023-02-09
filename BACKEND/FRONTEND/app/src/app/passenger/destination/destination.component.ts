import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.scss']
})
export class DestinationComponent implements OnInit {

  searchText = '';
  dropList: string[] = [];
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
  }
  log(value: any) {

    this.dropList = []
    // setTimeout(() => {
    //   alert("Alert activated")
    // }, 1000);
    
if(this.searchText!='')
{



  this.http
  .get(
    'https://api.opencagedata.com/geocode/v1/json?q='+this.searchText+
      '&key=a2580d3bbb4940d9bfa47c349d3cac3a'
  )
  .subscribe((data: any) => {
    const { results } = data;

   
    results.forEach((item: any) => {
      
      this.dropList.push(item.formatted)

      


    });

  });


}
   
  }
}
