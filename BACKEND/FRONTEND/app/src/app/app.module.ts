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
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BottomMenuComponent } from './passenger/bottom-menu/bottom-menu.component';
import { WalletComponent } from './passenger/wallet/wallet.component';
import { SidemenuComponent } from './inspector/sidemenu/sidemenu.component';
import { RouterModule, Routes } from '@angular/router';
import { IdashboardComponent } from './inspector/idashboard/idashboard.component';
import { PaymentComponent } from './inspector/payment/payment.component';
import { TopnavComponent } from './inspector/topnav/topnav.component';
import { LoadtokenComponent } from './inspector/loadtoken/loadtoken.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { ScanComponent } from './scan/scan.component';
import { NgxScannerQrcodeModule } from 'ngx-scanner-qrcode';
import { SafePipe } from './safe.pipe';
import { ModalComponent } from './modal/modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchplaceComponent } from './passenger/searchplace/searchplace.component';
import { StarttripComponent } from './passenger/starttrip/starttrip.component';
import { NavigateComponent } from './passenger/navigate/navigate.component';

import { TravelComponent } from './passenger/travel/travel.component';






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
    SidemenuComponent,
 
    IdashboardComponent,
    PaymentComponent,
    TopnavComponent,
    LoadtokenComponent,
    ScanComponent,
    SafePipe,
    SearchplaceComponent,
    StarttripComponent,
    NavigateComponent,
    ModalComponent,
    SearchplaceComponent,

    TravelComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgToastModule,
    PdfViewerModule,
    NgxScannerQrcodeModule,
    RouterModule,
    FormsModule


    
    // NgxSmartModalModule.forRoot()
  ],
  providers: [GuardService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
