import { Component, OnInit } from '@angular/core';
import { ScannerQRCodeConfig,  ScannerQRCodeSelectedFiles,  NgxScannerQrcodeService, ScannerQRCodeResult} from 'ngx-scanner-qrcode';


@Component({
  selector: 'app-scan',
  templateUrl: './scan.component.html',
  styleUrls: ['./scan.component.scss']
})
export class ScanComponent implements OnInit {

  public config: ScannerQRCodeConfig = {
    // fps: 1000,
    vibrate: 400,
    // isAuto: false,
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

 output:any;

 constructor(private qrcode: NgxScannerQrcodeService) { }

 public onEvent(e: ScannerQRCodeResult[]): void {
  //console.log(e[0].value);
  this.output = e[0].value;
}

public handle(action: any, fn: string): void {
  action[fn]().subscribe(console.log, alert);
}


  ngOnInit(): void {
  }

}
