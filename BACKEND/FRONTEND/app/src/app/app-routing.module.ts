import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { PDashboardComponent } from './passenger/p-dashboard/p-dashboard.component';
import { WalletComponent } from './passenger/wallet/wallet.component';
import { RegisterComponent } from './register/register.component';
import { AuthService } from './service/auth.service';

const routes: Routes = [{ path: '', component: HomepageComponent },{path: 'register', component:RegisterComponent},{path: 'login', component:LoginComponent},

{path: 'homepage', component: HomepageComponent},
{ path: '', redirectTo: 'homepage', pathMatch: 'full' },
{ path: 'p-dashboard', component: PDashboardComponent,canActivate:[AuthService] },{ path: 'wallet', component: WalletComponent,canActivate:[AuthService] }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
