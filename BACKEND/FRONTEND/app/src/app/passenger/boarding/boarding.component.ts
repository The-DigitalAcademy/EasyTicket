import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private router:Router,private toast :NgToastService) { }




  ngOnInit(): void {

 var trip 
    var map = L.map('map').setView([-26.186106, 28.0189964], 11);
		var mapLink = "<a href='http://openstreetmap.org'>OpenStreetMap</a>";
		L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', { attribution: 'Leaflet &copy; ' + mapLink + ', contribution', maxZoom: 18 }).addTo(map);

		var taxiIcon = L.icon({
			iconUrl: '/assets/img/bus.png',
			iconSize: [40, 40]
		})


		var marker = L.marker([-26.186106, 28.0189964], { icon: taxiIcon }).addTo(map);




		//map.on('click', function (e:any) to reslove the this implictly
		map.on('click',  (e:any) => {
		// console.log(e)
      
			var newMarker = L.marker([e.latlng.lat, e.latlng.lng]).addTo(map);
     

			L.Routing.control({
				waypoints: [
					L.latLng(-26.186106, 28.0189964),
					L.latLng(e.latlng.lat, e.latlng.lng)
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
      

					}, 1200 * index)

       
				})
        
        

			}).addTo(map);
		});

   
return trip;

  }
  open(kilos:any)
  {
	this.toast.success({detail:"Success",summary:'Thanks for using Our ticket ('+kilos+' KM).', duration:2000})
	setTimeout(()=> this.router.navigate(['/scanner/:address']),900)

  }
}





