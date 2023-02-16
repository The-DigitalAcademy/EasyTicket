import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyInforComponent } from './company-infor/company-infor.component';
import { HomepageComponent } from './homepage/homepage.component';
import { IdashboardComponent } from './inspector/idashboard/idashboard.component';
import { LoadtokenComponent } from './inspector/loadtoken/loadtoken.component';
import { PaymentComponent } from './inspector/payment/payment.component';
import { LoginComponent } from './login/login.component';
import { ComplaintComponent } from './passenger/complaint/complaint.component';
import { DestinationComponent } from './passenger/destination/destination.component';
import { PDashboardComponent } from './passenger/p-dashboard/p-dashboard.component';
import { PPaymentComponent } from './passenger/p-payment/p-payment.component';
import { PProfileComponent } from './passenger/p-profile/p-profile.component';
import { TripComponent } from './passenger/trip/trip.component';
import { WalletComponent } from './passenger/wallet/wallet.component';
import { RegisterComponent } from './register/register.component';
import { AuthService } from './service/auth.service';
import { ScanComponent } from './scan/scan.component';
import { ModalComponent } from './modal/modal.component';
import { SearchplaceComponent } from './passenger/searchplace/searchplace.component';

import { PassengersComponent } from './inspector/passengers/passengers.component';

import { StarttripComponent } from './passenger/starttrip/starttrip.component';
import { NavigateComponent } from './passenger/navigate/navigate.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { TravelComponent } from './passenger/travel/travel.component';
import { ComplainsComponent } from './passenger/complains/complains.component';
import { LodgecomplainsComponent } from './passenger/lodgecomplains/lodgecomplains.component';
import { ScannerComponent } from './passenger/scanner/scanner.component';




const routes: Routes = [{ path: '', component: HomepageComponent },{path: 'register', component:RegisterComponent},{path: 'login', component:LoginComponent},

{path: 'homepage', component: HomepageComponent},
{ path: '', redirectTo: 'homepage', pathMatch: 'full' },
{ path: 'complaint', component: ComplaintComponent,canActivate:[AuthService] },
{path: 'company-infor' , component: CompanyInforComponent,canActivate:[AuthService]},
{ path: 'p-dashboard', component: PDashboardComponent,canActivate:[AuthService] },
{ path: 'wallet', component: WalletComponent,canActivate:[AuthService] },
{ path: 'p-profile', component: PProfileComponent,canActivate:[AuthService] },
{ path: 'p-payment', component: PPaymentComponent,canActivate:[AuthService] },
{ path: 'idashboard', component: IdashboardComponent,canActivate:[AuthService] },
{ path: 'payment', component: PaymentComponent,canActivate:[AuthService] },
{ path: 'loadtoken', component: LoadtokenComponent,canActivate:[AuthService] },
{ path: 'modal', component: ModalComponent,canActivate:[AuthService]},
{ path: 'destination', component: DestinationComponent,canActivate:[AuthService] },
{ path: 'p-dashboard', component: PDashboardComponent,canActivate:[AuthService] },
{ path: 'wallet', component: WalletComponent,canActivate:[AuthService] },
{ path: 'p-profile', component: PProfileComponent,canActivate:[AuthService] },
{ path: 'p-payment', component: PPaymentComponent,canActivate:[AuthService] },
{ path: 'idashboard', component: IdashboardComponent,canActivate:[AuthService] },
{ path: 'payment', component: PaymentComponent,canActivate:[AuthService] },
{ path: 'loadtoken', component: LoadtokenComponent,canActivate:[AuthService] },
{ path: 'scan', component: ScanComponent,canActivate:[AuthService] },
{ path: 'searchplace', component: SearchplaceComponent,canActivate:[AuthService] },
{ path: 'passengers', component: PassengersComponent,canActivate:[AuthService] },
{ path: 'starttrip/:address', component: StarttripComponent,canActivate:[AuthService] },
{ path: 'navigate/:address', component: NavigateComponent,canActivate:[AuthService] },
{ path: 'travel', component: TravelComponent,canActivate:[AuthService] },
{ path: 'complains', component: ComplainsComponent,canActivate:[AuthService] },
{ path: 'lodgecomplains', component: LodgecomplainsComponent,canActivate:[AuthService] },
{ path: 'scanner/:address', component: ScannerComponent,canActivate:[AuthService] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes), BrowserModule,
    FormsModule  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
