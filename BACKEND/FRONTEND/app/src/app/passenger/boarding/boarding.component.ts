import { Component, OnInit } from '@angular/core';
declare const L: any;
@Component({
  selector: 'app-boarding',
  templateUrl: './boarding.component.html',
  styleUrls: ['./boarding.component.scss']
})
export class BoardingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {


    var map = L.map('map').setView([-26.186106, 28.0189964], 11);
		var mapLink = "<a href='http://openstreetmap.org'>OpenStreetMap</a>";
		L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', { attribution: 'Leaflet &copy; ' + mapLink + ', contribution', maxZoom: 18 }).addTo(map);

		var taxiIcon = L.icon({
			iconUrl: '/assets/img/bus.png',
			iconSize: [40, 40]
		})


		var marker = L.marker([-26.186106, 28.0189964], { icon: taxiIcon }).addTo(map);

		map.on('click', function (e:any) {
			console.log(e)
			var newMarker = L.marker([e.latlng.lat, e.latlng.lng]).addTo(map);
			L.Routing.control({
				waypoints: [
					L.latLng(-26.186106, 28.0189964),
					L.latLng(e.latlng.lat, e.latlng.lng)
				]
			}).on('routesfound', function (e:any) {
				var routes = e.routes;
				console.log(routes);

				e.routes[0].coordinates.forEach(function (coord:any, index:any) {
					setTimeout(function () {
						marker.setLatLng([coord.lat, coord.lng]);
					}, 900 * index)


				})

			}).addTo(map);
		});


  }

}
