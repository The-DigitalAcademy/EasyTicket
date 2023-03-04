import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgToastModule } from 'ng-angular-popup';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PDashboardComponent } from './passenger/p-dashboard/p-dashboard.component';
import { PProfileComponent } from './passenger/p-profile/p-profile.component';
import { PPaymentComponent } from './passenger/p-payment/p-payment.component';
import { AuthService } from './service/auth.service';
import { GuardService } from './service/guard.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { BottomMenuComponent } from './passenger/bottom-menu/bottom-menu.component';
// import { WalletComponent } from './passenger/wallet/wallet.component';
import { ComplaintComponent } from './passenger/complaint/complaint.component';
import { TripComponent } from './passenger/trip/trip.component';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// import { HttpClientModule } from '@angular/common/http';
// import { BottomMenuComponent } from './passenger/bottom-menu/bottom-menu.component';
import { WalletComponent } from './passenger/wallet/wallet.component';
import { SidemenuComponent } from './inspector/sidemenu/sidemenu.component';
import { RouterModule, Routes } from '@angular/router';
import { IdashboardComponent } from './inspector/idashboard/idashboard.component';
import { PaymentComponent } from './inspector/payment/payment.component';
import { TopnavComponent } from './inspector/topnav/topnav.component';
import { LoadtokenComponent } from './inspector/loadtoken/loadtoken.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';

import { CompanyInforComponent } from './company-infor/company-infor.component';


import { NgxScannerQrcodeModule } from 'ngx-scanner-qrcode';
import { SafePipe } from './safe.pipe';
import { ModalComponent } from './modal/modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchplaceComponent } from './passenger/searchplace/searchplace.component';

import { PassengersComponent } from './inspector/passengers/passengers.component';
import { SuspendedComponent } from './inspector/suspended/suspended.component';

import { StarttripComponent } from './passenger/starttrip/starttrip.component';
import { NavigateComponent } from './passenger/navigate/navigate.component';

import { TravelComponent } from './passenger/travel/travel.component';
import { ComplainsComponent } from './passenger/complains/complains.component';
import { LodgecomplainsComponent } from './passenger/lodgecomplains/lodgecomplains.component';
import { ScannerComponent } from './passenger/scanner/scanner.component';
import { ActiveComponent } from './inspector/active/active.component';
import { PassengercategoryComponent } from './inspector/passengercategory/passengercategory.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { BoardingComponent } from './passenger/boarding/boarding.component';
import { PasswordrecoveryComponent } from './passwordrecovery/passwordrecovery.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ReadComponent } from './passenger/complains/read/read.component';
import { ChangepasswordComponent } from './passenger/p-profile/changepassword/changepassword.component';






// import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// import { NgxSmartModalModule,NgxSmartModalService } from 'ngx-smart-modal';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomepageComponent,
    PDashboardComponent,
    PProfileComponent,
    PPaymentComponent,
    BottomMenuComponent,
    WalletComponent,
    ComplaintComponent,
    TripComponent,
    SidemenuComponent,
 
    IdashboardComponent,
    PaymentComponent,
    TopnavComponent,
    LoadtokenComponent,
    CompanyInforComponent,

    SafePipe,
    SearchplaceComponent,
    StarttripComponent,
    NavigateComponent,
    ModalComponent,
    SearchplaceComponent,
    PassengersComponent,
    SuspendedComponent,
    TravelComponent,
    PassengersComponent,
    ComplainsComponent,
    LodgecomplainsComponent,
    ScannerComponent,
    ActiveComponent,
    PassengercategoryComponent,
    BoardingComponent,
    PasswordrecoveryComponent,
    ReadComponent,
    ChangepasswordComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,ReactiveFormsModule,NgToastModule,
    PdfViewerModule,
    NgxScannerQrcodeModule,
    RouterModule,
    FormsModule,
    NgApexchartsModule,
    FormsModule,NgxSpinnerModule

  ],
  // imports: [
  //   BrowserModule,
  //   AppRoutingModule,
  //   HttpClientModule,
  //   ReactiveFormsModule,
  //   NgToastModule,
   

   


    
  //   // NgxSmartModalModule.forRoot()
  // ],
  providers: [GuardService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
