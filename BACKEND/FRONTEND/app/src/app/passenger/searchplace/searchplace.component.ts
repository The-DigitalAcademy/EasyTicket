import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-searchplace',
  templateUrl: './searchplace.component.html',
  styleUrls: ['./searchplace.component.scss']
})
export class SearchplaceComponent implements OnInit {

  searchText = '';
  heroes = [];
  got: any;
  dropList: string[] = [];



  constructor(private http: HttpClient,private router: Router) {}

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
      this.got=this.dropList.push(item.formatted)

    });

  });


}
   
  }

 

  save(place:any)
  {
  
   console.log(place)
   //setTimeout(()=> this.router.navigate(['/destination']),1600)
   this.router.navigate(['/destination'])

  }
}
