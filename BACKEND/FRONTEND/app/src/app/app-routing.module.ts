import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { IdashboardComponent } from './inspector/idashboard/idashboard.component';
import { LoadtokenComponent } from './inspector/loadtoken/loadtoken.component';
import { PaymentComponent } from './inspector/payment/payment.component';
import { LoginComponent } from './login/login.component';
import { DestinationComponent } from './passenger/destination/destination.component';
import { PDashboardComponent } from './passenger/p-dashboard/p-dashboard.component';
import { PPaymentComponent } from './passenger/p-payment/p-payment.component';
import { PProfileComponent } from './passenger/p-profile/p-profile.component';
import { WalletComponent } from './passenger/wallet/wallet.component';
import { RegisterComponent } from './register/register.component';
import { AuthService } from './service/auth.service';
import { ScanComponent } from './scan/scan.component';
import { ModalComponent } from './modal/modal.component';
import { SearchplaceComponent } from './passenger/searchplace/searchplace.component';

import { PassengersComponent } from './inspector/passengers/passengers.component';

import { StarttripComponent } from './passenger/starttrip/starttrip.component';
import { NavigateComponent } from './passenger/navigate/navigate.component';




const routes: Routes = [{ path: '', component: HomepageComponent },{path: 'register', component:RegisterComponent},{path: 'login', component:LoginComponent},

{path: 'homepage', component: HomepageComponent},
{ path: '', redirectTo: 'homepage', pathMatch: 'full' },
{ path: 'p-dashboard', component: PDashboardComponent,canActivate:[AuthService] },
{ path: 'wallet', component: WalletComponent,canActivate:[AuthService] },
{ path: 'p-profile', component: PProfileComponent,canActivate:[AuthService] },
{ path: 'p-payment', component: PPaymentComponent,canActivate:[AuthService] },
{ path: 'idashboard', component: IdashboardComponent,canActivate:[AuthService] },
{ path: 'payment', component: PaymentComponent,canActivate:[AuthService] },
{ path: 'loadtoken', component: LoadtokenComponent,canActivate:[AuthService] },
{ path: 'scan', component: ScanComponent,canActivate:[AuthService] },
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
{ path: 'scan', component: ScanComponent,canActivate:[AuthService] },
{ path: 'modal', component: ModalComponent,canActivate:[AuthService]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
