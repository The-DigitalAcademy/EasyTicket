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
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BottomMenuComponent } from './passenger/bottom-menu/bottom-menu.component';
import { WalletComponent } from './passenger/wallet/wallet.component';
import { ComplaintComponent } from './passenger/complaint/complaint.component';

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
    ComplaintComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,ReactiveFormsModule,NgToastModule
  ],
  providers: [GuardService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
