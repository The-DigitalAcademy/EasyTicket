import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ScannerQRCodeConfig,  ScannerQRCodeSelectedFiles,  NgxScannerQrcodeService, ScannerQRCodeResult} from 'ngx-scanner-qrcode';


@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.scss']
})
export class ScannerComponent implements OnInit {

  params:any;
  output:any;
  constructor(route: ActivatedRoute,private qrcode: NgxScannerQrcodeService,private router:Router) { 

    this.params = route.snapshot.params;
  }

  public config: ScannerQRCodeConfig = {
    //fps: 1000,
    //vibrate: 400,
    //isAuto: false,
    // isBeep: true,

    // decode: 'macintosh',
    deviceActive: 1,
    constraints: { 
      audio: false,
      video: {
        width: window.innerWidth
      }
    } 
  };

  
  public onEvent(e: ScannerQRCodeResult[]): void {
    //console.log(e[0].value);


    if(e[0].value=='Your trip has started😀'){

      setTimeout(()=> this.router.navigate(['/boarding']),900)
     

    }
    this.output = e[0].value;
  }
  
  public handle(action: any, fn: string): void {
    action[fn]().subscribe(console.log, alert);
  }

  ngOnInit(): void {
  }

}
