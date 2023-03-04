import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable } from 'rxjs';
declare const L: any;
@Component({
  selector: 'app-navigate',
  templateUrl: './navigate.component.html',
  styleUrls: ['./navigate.component.scss']
})
export class NavigateComponent implements OnInit {
  params: any;
  benchmark:any
  followthis:any;
  test!:any;


  constructor(route: ActivatedRoute,private http: HttpClient,private spinner: NgxSpinnerService) {

    this.params = route.snapshot.params;
   }
   Direction: string[] = [];
   public lat: any;
   public lng: any;
   dropList: string[] = [];
   latD:any;
   lngD:any;
   storedaddress:any;
  ngOnInit(): void {

    this.storedaddress=sessionStorage.getItem('Destination');
    this.spinner.show();
//find my current location
 navigator.geolocation.getCurrentPosition((position) => {

      if (position) {
        this.lat=position.coords.latitude;
        this.lng=position.coords.longitude;
       
      }

    
      this.http
      .get(
        'https://api.opencagedata.com/geocode/v1/json?q='+this.storedaddress+'&key=a2580d3bbb4940d9bfa47c349d3cac3a'
      )
      .subscribe((data: any) => {
        

        this.spinner.hide();
  
        this.latD=data.results[0].geometry.lat;
        this.lngD=data.results[0].geometry.lng;

        console.log(this.latD,this.lngD);
        console.log( this.lat,this.lng);


        var map = L.map('map').setView([-26.1861256,28.0189559], 8);
        var mapLink =
        '<a href="http://openstreetmap.org">OpenStreetMap</a>';
        L.tileLayer(
        'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; ' + mapLink,
        maxZoom: 20,
        }).addTo(map);
        
  
  
        var routing = L.Routing.control({
          waypoints: [
          L.latLng(this.lat,this.lng),
          L.latLng( this.latD,this.lngD)
          ]
        })
        routing.addTo(map);
      
      });
    })
  

//getting routes api
    // this.get_Data().subscribe((data:any) =>{
      
    //   this.test = data.features[0].properties.legs[0].steps;
    // });  
  }
  // get_Data(){

  // let pointA='-26.1861256,28.0189559';
  // let pointB='-26.183182600000002,28.020225638225238';
  // return this.http.get('https://api.geoapify.com/v1/routing?waypoints='+pointA+'|'+pointB+'&mode=walk&apiKey=5c2b95106e094fa08e3f0fabf3c97c93')

  // }

}
