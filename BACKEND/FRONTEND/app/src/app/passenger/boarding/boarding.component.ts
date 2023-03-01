import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { TripComponent } from '../trip/trip.component';
declare const L: any;
@Component({
  selector: 'app-boarding',
  templateUrl: './boarding.component.html',
  styleUrls: ['./boarding.component.scss']
})
export class BoardingComponent implements OnInit {
pointmap:any;
busMoves:any;
params: any;
public latCurrent: any;
public lngCurrent: any;
latD:any;
lngD:any;
storedaddress:any;

  constructor(private router:Router,private toast :NgToastService,route: ActivatedRoute,private http: HttpClient) { 


	this.params = route.snapshot.params;

  }




  ngOnInit(): void {

	this.storedaddress=sessionStorage.getItem('Destination');

//find my current location
navigator.geolocation.getCurrentPosition((position) => {

	if (position) {
	  this.latCurrent=position.coords.latitude;
	  this.lngCurrent=position.coords.longitude;
	 
	}


var trip;

	var map = L.map('map').setView([-26.186106, 28.0189964], 11);
		var mapLink = "<a href='http://openstreetmap.org'>OpenStreetMap</a>";
		L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', { attribution: 'Leaflet &copy; ' + mapLink + ', contribution', maxZoom: 19 }).addTo(map);

		var taxiIcon = L.icon({
			iconUrl: '/assets/img/bus.png',
			iconSize: [40, 40]
		})


		var marker = L.marker([-26.186106, 28.0189964], { icon: taxiIcon }).addTo(map);




		//map.on('click', function (e:any) to reslove the this implictly
		//map.on('click',  (e:any) => {
		// console.log(e)
	       //-26.18322,28.02021
			//var newMarker = L.marker([e.latlng.lat,e.latlng.lng]).addTo(map);
	 
			this.http
			.get(
			  'https://api.opencagedata.com/geocode/v1/json?q='+this.storedaddress+'&key=a2580d3bbb4940d9bfa47c349d3cac3a'
			)
			.subscribe((data: any) => {

				this.latD=data.results[0].geometry.lat;
				this.lngD=data.results[0].geometry.lng; 
			
		 
		
			console.log('here    utioriuoeroor',this.latD,this.lngD)


			L.Routing.control({
				waypoints: [
					L.latLng(this.latCurrent, this.lngCurrent),
					L.latLng(this.latD,this.lngD)
				]
		

		
		
			}).on('routesfound',  (e:any) => {
				var routes = e.routes;
				console.log(routes);



				e.routes[0].coordinates.forEach( (coord:any, index:any) => {
					setTimeout( () => {
			marker.setLatLng([coord.lat, coord.lng]);
		   
			if(routes[0].coordinates.length==index + 1)
			{
			  var kilotravelled=((routes[0].summary.totalDistance)*0.001).toFixed(4);
			 
		   

			trip= this.open(kilotravelled)
			 
			}
	  

					}, 100 * index)

	   
				})
		
		

			}).addTo(map);

		})

		});

   //return trip;

  
 // })




  }
  open(kilos:any)
  {
	this.toast.success({detail:"Success",summary:'Thanks for using Our ticket ('+kilos+' KM).', duration:2000})
	setTimeout(()=> this.router.navigate(['/scanner']),9000)

  }
}





