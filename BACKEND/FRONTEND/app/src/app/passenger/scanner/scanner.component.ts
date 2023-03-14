import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { NgToastService } from 'ng-angular-popup';
import {
  ScannerQRCodeConfig,
  ScannerQRCodeSelectedFiles,
  NgxScannerQrcodeService,
  ScannerQRCodeResult,
} from 'ngx-scanner-qrcode';
import { NgxSpinnerService } from 'ngx-spinner';
import { JwtService } from 'src/app/service/jwt.service';
import { PassengerService } from 'src/app/service/passenger.service';

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.scss'],
})
export class ScannerComponent implements OnInit {
  params: any;
  output: any;
  dropList: string[] = [];
  got: any;
  public lat: any;
  public lng: any;
  storedaddress: any;
  once = false;
allsearch:any
  constructor(
    route: ActivatedRoute,
    private qrcode: NgxScannerQrcodeService,
    private http: HttpClient,
    private router: Router,
    private toast: NgToastService,
    private passenger: PassengerService,
    private jwtService: JwtService,
    private spinner: NgxSpinnerService
  ) {
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
        width: window.innerWidth,
      },
    },
  };

  track: number = 0;

  public onEvent(e: ScannerQRCodeResult[]): void {
   
    this.output = e[0].value;
   // console.log(this.output);

    if (this.output == 'Your trip has started😀') {


      this.track++
      if (this.track == 1) {

        this.PunchIn();
      }
     
     
    } else if (
      this.output == 'Your trip has ended...Thank you for using our ticket😀'
    ) {
      this.track++
      if (this.track == 1) {

        this.PunchOut();
      }

    } else {
      this.toast.warning({
        detail: 'Warning',
        summary: 'Not an authorized QR code.',
        duration: 3000,
      });
      setTimeout(() => this.router.navigate(['/travel']), 900);
    }
  }

  public handle(action: any, fn: string): void {
    action[fn]().subscribe(console.log, alert);
  }
  user = {
    id: '',
    fullname: '',
    email: '',
    amount: '',
  };
  ngOnInit(): void {
    this.storedaddress = sessionStorage.getItem('Destination');

    console.clear();
  }

  PunchOut() {
    this.spinner.show();
    this.once = true;
    this.user = this.jwtService.getDetails(
      localStorage.getItem('token')
    ).data.rows[0];
    //display one character of fullname
    let id = this.user.id;

    let price = sessionStorage.getItem('price');
    let Destination = sessionStorage.getItem('Destination');

    var out = {
      id: id,
      input: price,
    };

    var tripdata = {
      user_id: id,
      depart_to: Destination,
      tokens: price,
    };
    if (price == null) {
      this.toast.warning({
        detail: 'Warning',
        summary: 'No Trip started.',
        duration: 4000,
      });
      setTimeout(() => this.router.navigate(['/scanner']), 1000);
      setTimeout(() => sessionStorage.clear(), 500);
      setTimeout(() => this.spinner.hide(), 600);
    } else {
      this.passenger.Historytrip(tripdata).subscribe(() => {
        this.passenger.PayRoute(out).subscribe(() => {
          this.toast.success({
            detail: 'Success',
            summary: price + ' tokens is deducted',
            duration: 4000,
          });
          setTimeout(() => this.router.navigate(['/wallet']), 600);

          setTimeout(() => this.spinner.hide(), 600);
          setTimeout(() => sessionStorage.clear(), 600);
        });
      });
    }
  }

  PunchIn() {


 this.spinner.show();
//get my location
navigator.geolocation.getCurrentPosition((position) => {


      if (position) {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
      }

      let currentCod = this.lat + ',' + this.lng;
      this.getAddress(currentCod).subscribe((data: any) => {


      //console.log(data.results[0].formatted)

        this.user = this.jwtService.getDetails(
            localStorage.getItem('token')
          ).data.rows[0];
          //display one character of fullname
          let id = this.user.id;
          let wallet = this.user.amount;
        

        var search={

          departing_from:data.results[0].formatted,
          departing_to:sessionStorage.getItem('Destination')
        }
        //console.log(search)
  
        this.passenger.searchStation(search).subscribe(data => {
          this.allsearch=data;
          
          if(this.allsearch[0].departing_from==search.departing_from && this.allsearch[0].departing_to==search.departing_to)
          {
           
           let priceTrip=this.allsearch[0].price;

        //  console.log(this.allsearch[0].price)
        
           if (priceTrip <= wallet) 
           {
            sessionStorage.setItem('price', priceTrip);
            sessionStorage.setItem('wallet', wallet);
         

            this.toast.success({
              detail: 'Success',
              summary: 'Trip has started',
              duration: 2000,
            });
            setTimeout(() => this.router.navigate(['/boarding']), 900);
            this.spinner.hide();
           }else
           {

            this.toast.warning({
            detail: 'Warning',
            summary: 'Please recharge your balance is low.',
            duration: 2000,
          });
          setTimeout(() => this.router.navigate(['/scanner']), 900);
          this.spinner.hide();

          }
          }else
          {
            this.toast.error({
            detail: 'Warning',
            summary: 'No match of address found.',
            duration: 3000,
          });
          setTimeout(() => this.router.navigate(['/travel']), 900);
          this.spinner.hide();
      
          }
           
      
      
          })

      })
    
      
      })

 
  
  

   

    // let addressCurrentDB =
    //   'Owl Street, Cottesloe, Johannesburg, 2001, South Africa';
    // let addressToDB =
    //   'Milpark Bus Station (T3, C4, C5), Empire Road, Cottesloe, Johannesburg Ward 60, Johannesburg, City of Johannesburg Metropolitan Municipality, Gauteng, 2001, South Africa';
    // let selectedAddressToDB =
    //   'Milpark Bus Station (T3, C4, C5), Empire Road, Cottesloe, Johannesburg Ward 60, Johannesburg, City of Johannesburg Metropolitan Municipality, Gauteng, 2001, South Africa';
    // let priceTrip = 15.5;

    // this.user = this.jwtService.getDetails(
    //   localStorage.getItem('token')
    // ).data.rows[0];
    // //display one character of fullname
    // let id = this.user.id;
    // let wallet = parseFloat(this.user.amount);
    // let price = sessionStorage.getItem('price');
    // let Destination = sessionStorage.getItem('Destination');

    // //find my current location
    // navigator.geolocation.getCurrentPosition((position) => {
    //   if (position) {
    //     this.lat = position.coords.latitude;
    //     this.lng = position.coords.longitude;

    //     let currentLat = this.lat;
    //     let currentLng = this.lng;

    //     let currentCod = currentLat + ',' + currentLng;

    //     this.getAddress(currentCod).subscribe((data: any) => {
    //       this.spinner.hide();
    //       if (
    //         data.results[0].formatted == addressCurrentDB &&
    //         selectedAddressToDB == addressToDB
    //       ) {
    //         if (priceTrip < wallet) {
    //           sessionStorage.setItem('CordinatesCurrent', currentCod);
    //           sessionStorage.setItem('price', priceTrip.toFixed(2));
    //           sessionStorage.setItem('wallet', wallet.toFixed(2));
    //           sessionStorage.setItem('Destination', selectedAddressToDB);

    //           this.toast.success({
    //             detail: 'Success',
    //             summary: 'Trip has started',
    //             duration: 2000,
    //           });
    //           setTimeout(() => this.router.navigate(['/boarding']), 90);
    //         } else if (priceTrip === wallet) {
    //           sessionStorage.setItem('CordinatesCurrent', currentCod);
    //           sessionStorage.setItem('price', priceTrip.toFixed(2));
    //           sessionStorage.setItem('wallet', wallet.toFixed(2));
    //           sessionStorage.setItem('Destination', selectedAddressToDB);

    //           this.toast.success({
    //             detail: 'Success',
    //             summary: 'Trip has started',
    //             duration: 2000,
    //           });
    //           setTimeout(() => this.router.navigate(['/boarding']), 900);
    //         } else {
    //           this.toast.warning({
    //             detail: 'Warning',
    //             summary: 'Please recharge your balance is low.',
    //             duration: 2000,
    //           });
    //           setTimeout(() => this.router.navigate(['/scanner']), 900);
    //         }
    //       } else {
    //         this.toast.warning({
    //           detail: 'Warning',
    //           summary: 'No match of address found.',
    //           duration: 3000,
    //         });
    //         setTimeout(() => this.router.navigate(['/travel']), 900);
    //       }
    //     });
    //   }
    // });
  }

  getAddress(coord: any) {
    return this.http.get(
      'https://api.opencagedata.com/geocode/v1/json?q=' +
        coord +
        '&key=a2580d3bbb4940d9bfa47c349d3cac3a&language=en&pretty=1'
    );
  }
}
