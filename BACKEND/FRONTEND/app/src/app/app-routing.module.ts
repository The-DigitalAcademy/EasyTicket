import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyInforComponent } from './company-infor/company-infor.component';
import { HomepageComponent } from './homepage/homepage.component';
import { IdashboardComponent } from './inspector/idashboard/idashboard.component';
import { LoadtokenComponent } from './inspector/payment/loadtoken/loadtoken.component';
import { PaymentComponent } from './inspector/payment/payment.component';
import { LoginComponent } from './login/login.component';
import { DestinationComponent } from './passenger/destination/destination.component';
import { PDashboardComponent } from './passenger/p-dashboard/p-dashboard.component';
import { PPaymentComponent } from './passenger/p-payment/p-payment.component';
import { PProfileComponent } from './passenger/p-profile/p-profile.component';
import { TripComponent } from './passenger/trip/trip.component';
import { WalletComponent } from './passenger/wallet/wallet.component';
import { RegisterComponent } from './register/register.component';
import { AuthService } from './service/auth.service';
import { SearchplaceComponent } from './passenger/searchplace/searchplace.component';
import { PassengersComponent } from './inspector/passengers/passengers.component';
import { SuspendedComponent } from './inspector/passengers/suspended/suspended.component';
import { StarttripComponent } from './passenger/starttrip/starttrip.component';
import { NavigateComponent } from './passenger/navigate/navigate.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { TravelComponent } from './passenger/travel/travel.component';
import { ComplainsComponent } from './passenger/complains/complains.component';
import { LodgecomplainsComponent } from './passenger/lodgecomplains/lodgecomplains.component';
import { ScannerComponent } from './passenger/scanner/scanner.component';
import { ActiveComponent } from './inspector/passengers/active/active.component';
import { BoardingComponent } from './passenger/boarding/boarding.component';
import { PasswordrecoveryComponent } from './passwordrecovery/passwordrecovery.component';
import { ReadComponent } from './passenger/complains/read/read.component';
import { ChangepasswordComponent } from './passenger/p-profile/changepassword/changepassword.component';
import { OtpComponent } from './passwordrecovery/otp/otp.component';
import { UpdatepasswordComponent } from './passwordrecovery/updatepassword/updatepassword.component';
import { ErrorComponent } from './login/error/error.component';
import { TransactionComponent } from './inspector/passengers/transaction/transaction.component';
import { ReportComponent } from './inspector/idashboard/report/report.component';
import { PassengercomplainComponent } from './inspector/complainlist/passengercomplain/passengercomplain.component';
import { DailyComponent } from './inspector/idashboard/report/daily/daily.component';
import { WeeklyComponent } from './inspector/idashboard/report/weekly/weekly.component';
import { MonthlyComponent } from './inspector/idashboard/report/monthly/monthly.component';
import { MonthlycomplainComponent } from './inspector/complainlist/passengercomplain/monthlycomplain/monthlycomplain.component';
import { WeeklycomplainComponent } from './inspector/complainlist/passengercomplain/weeklycomplain/weeklycomplain.component';
import { DailycomplainComponent } from './inspector/complainlist/passengercomplain/dailycomplain/dailycomplain.component';
import { DailypaymentsComponent } from './inspector/payment/dailypayments/dailypayments.component';
import { WeeklypaymentsComponent } from './inspector/payment/weeklypayments/weeklypayments.component';
import { MonthlypaymentsComponent } from './inspector/payment/monthlypayments/monthlypayments.component';




const routes: Routes = [{ path: '', component: HomepageComponent },{path: 'register', component:RegisterComponent},{path: 'login', component:LoginComponent},

{path: 'homepage', component: HomepageComponent},
{ path: '', redirectTo: 'homepage', pathMatch: 'full' },
{path: 'company-infor' , component: CompanyInforComponent,canActivate:[AuthService]},
{ path: 'p-dashboard', component: PDashboardComponent,canActivate:[AuthService] },
{ path: 'wallet', component: WalletComponent,canActivate:[AuthService] },
{ path: 'p-profile', component: PProfileComponent,canActivate:[AuthService] },
{ path: 'p-payment', component: PPaymentComponent,canActivate:[AuthService] },
{ path: 'idashboard', component: IdashboardComponent,canActivate:[AuthService] },
{ path: 'payment', component: PaymentComponent,canActivate:[AuthService] },
{ path: 'loadtoken', component: LoadtokenComponent,canActivate:[AuthService] },
{ path: 'destination', component: DestinationComponent,canActivate:[AuthService] },
{ path: 'p-dashboard', component: PDashboardComponent,canActivate:[AuthService] },
{ path: 'wallet', component: WalletComponent,canActivate:[AuthService] },
{ path: 'p-profile', component: PProfileComponent,canActivate:[AuthService] },
{ path: 'p-payment', component: PPaymentComponent,canActivate:[AuthService] },
{ path: 'idashboard', component: IdashboardComponent,canActivate:[AuthService] },
{ path: 'payment', component: PaymentComponent,canActivate:[AuthService] },
{ path: 'loadtoken', component: LoadtokenComponent,canActivate:[AuthService] },
{ path: 'changepassword', component: ChangepasswordComponent,canActivate:[AuthService] },
{ path: 'searchplace', component: SearchplaceComponent,canActivate:[AuthService] },
{ path: 'passengers', component: PassengersComponent,canActivate:[AuthService] },
{ path: 'read/:id', component: ReadComponent,canActivate:[AuthService] },
{ path: 'suspended', component: SuspendedComponent,canActivate:[AuthService]},
{ path: 'starttrip/:address', component: StarttripComponent,canActivate:[AuthService] },
{ path: 'navigate', component: NavigateComponent,canActivate:[AuthService] },
{ path: 'travel', component: TravelComponent,canActivate:[AuthService] },
{ path: 'complains', component: ComplainsComponent,canActivate:[AuthService] },
{ path: 'lodgecomplains', component: LodgecomplainsComponent,canActivate:[AuthService] },
{ path: 'scanner', component: ScannerComponent,canActivate:[AuthService] },
{ path: 'active', component: ActiveComponent,canActivate:[AuthService] },
{ path: 'boarding', component: BoardingComponent,canActivate:[AuthService] },
{ path: 'transaction/:id', component: TransactionComponent,canActivate:[AuthService]},
{ path: 'passwordrecovery', component: PasswordrecoveryComponent},
{ path: 'boarding', component: BoardingComponent,canActivate:[AuthService]},
{ path: 'passwordrecovery', component: PasswordrecoveryComponent},
{ path: 'otp', component: OtpComponent},
{ path: 'updatepassword', component: UpdatepasswordComponent},
{ path: 'error', component: ErrorComponent},
{ path: 'report', component: ReportComponent,canActivate:[AuthService]},
{ path: 'passengercomplain', component: PassengercomplainComponent,canActivate:[AuthService]},
{ path: 'daily', component: DailyComponent,canActivate:[AuthService]},
{ path: 'weekly', component: WeeklyComponent,canActivate:[AuthService]},
{ path: 'monthly', component: MonthlyComponent,canActivate:[AuthService]},
{ path: 'dailycomplain', component: DailycomplainComponent,canActivate:[AuthService]},
{ path: 'weeklycomplain', component: WeeklycomplainComponent,canActivate:[AuthService]},
{ path: 'monthlycomplain', component: MonthlycomplainComponent,canActivate:[AuthService]},
{ path: 'dailypayments', component: DailypaymentsComponent,canActivate:[AuthService]},
{ path: 'weeklypayments', component: WeeklypaymentsComponent,canActivate:[AuthService]},
{ path: 'monthlypayments', component: MonthlypaymentsComponent,canActivate:[AuthService]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes), BrowserModule,
    FormsModule  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
