import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { ScannerQRCodeConfig,  ScannerQRCodeSelectedFiles,  NgxScannerQrcodeService, ScannerQRCodeResult} from 'ngx-scanner-qrcode';


@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.scss']
})
export class ScannerComponent implements OnInit {

  params:any;
  output:any;
  dropList: string[] = [];
  got:any;
  public lat: any;
  public lng: any;
  storedaddress:any;

  
  constructor(route: ActivatedRoute,private qrcode: NgxScannerQrcodeService,private http:HttpClient,private router:Router,private toast :NgToastService) { 

    this.params = route.snapshot.params;
  }

  public config: ScannerQRCodeConfig = {
    //fps: 1000,
    //vibrate: 400,
     isAuto: false,
     isBeep: false,

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
    this.output = e[0].value;
  if(this.output=='Your trip has started😀')
  {

  this.PunchIn();


  }else if(this.output=='Your trip has ended...Thank you for using our ticket😀')
  {

    this.PunchOut();


  }else
  {
    this.toast.warning({detail:"Warning",summary:'Not an authorized QR code.', duration:3000})
    setTimeout(()=> this.router.navigate(['/travel']),900)

  }








  }
  
  public handle(action: any, fn: string): void {
    action[fn]().subscribe(console.log, alert);
  }

  ngOnInit(): void {


    this.storedaddress=sessionStorage.getItem('Destination');

  
  }



  PunchOut()
  {


    let price=sessionStorage.getItem('price');
    let Destination=sessionStorage.getItem('Destination');


    

    this.toast.success({detail:"Success",summary:price+' tokens is deducted', duration:4000})
    setTimeout(()=> this.router.navigate(['/wallet']),10000)
    setTimeout(()=> sessionStorage.clear(),5000)

  }

  PunchIn()
  {



    let addressCurrentDB='Owl Street, Cottesloe, Johannesburg, 2001, South Africa';
    let addressToDB='Milpark Bus Station (T3, C4, C5), Empire Road, Cottesloe, Johannesburg Ward 60, Johannesburg, City of Johannesburg Metropolitan Municipality, Gauteng, 2001, South Africa';
    let selectedAddressToDB='Milpark Bus Station (T3, C4, C5), Empire Road, Cottesloe, Johannesburg Ward 60, Johannesburg, City of Johannesburg Metropolitan Municipality, Gauteng, 2001, South Africa';
    let priceTrip=15.50
    let wallet=100.50
 
 
  console.log(wallet.toFixed(2),priceTrip.toFixed(2));
    //find my current location
  navigator.geolocation.getCurrentPosition((position) => {
 
   if (position) {
 
     this.lat=position.coords.latitude;
     this.lng=position.coords.longitude;
 
  let currentLat=this.lat;
  let currentLng=this.lng;
 
  let currentCod=currentLat+','+currentLng;
 
  this.getAddress(currentCod).subscribe((data:any) => {
 
 
 if(data.results[0].formatted==addressCurrentDB && selectedAddressToDB==addressToDB)
 {
 
     if(priceTrip < wallet)
     {
       sessionStorage.setItem("CordinatesCurrent",currentCod);
       sessionStorage.setItem("price",priceTrip.toFixed(2));
       sessionStorage.setItem("wallet",wallet.toFixed(2));
       sessionStorage.setItem("Destination",selectedAddressToDB);
 
       this.toast.success({detail:"Success",summary:'Trip has started', duration:2000})
       setTimeout(()=> this.router.navigate(['/boarding']),900)
 
     }else if(priceTrip === wallet)
     {
 
       sessionStorage.setItem("CordinatesCurrent",currentCod);
       sessionStorage.setItem("price",priceTrip.toFixed(2));
       sessionStorage.setItem("wallet",wallet.toFixed(2));
       sessionStorage.setItem("Destination",selectedAddressToDB);
 
       this.toast.success({detail:"Success",summary:'Trip has started', duration:2000})
       setTimeout(()=> this.router.navigate(['/boarding']),900)
     
     }else
     {
 
      this.toast.warning({detail:"Warning",summary:'Please recharge your balance is low.', duration:2000})
      setTimeout(()=> this.router.navigate(['/scanner']),900)
 
     }
 
 }else
 {
  this.toast.warning({detail:"Warning",summary:'No match of address found.', duration:3000})
  setTimeout(()=> this.router.navigate(['/travel']),900)
 
 }
 
 
  })
  
 
     
 }
 
 
 
 
 })

  }

  getAddress(coord:any)
  {
    return this.http.get('https://api.opencagedata.com/geocode/v1/json?q='+coord+'&key=a2580d3bbb4940d9bfa47c349d3cac3a&language=en&pretty=1')
  
  }

}
