import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scan-trip',
  templateUrl: './scan-trip.component.html',
  styleUrls: ['./scan-trip.component.scss']
})
export class ScanTripComponent implements OnInit {
progress: any;
clickHandler($event: MouseEvent) {
throw new Error('Method not implemented.');
}
showMenuToggle: any;
disabled: any;

  constructor() { }

  ngOnInit(): void {
  }

}
