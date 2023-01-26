import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdmRoutesComponent } from './admin/adm-routes/adm-routes.component';
import { SearchComponent } from './search/search.component';
import { WalletComponent } from './wallet/wallet.component';

const routes: Routes = [
{ path: '', component: HomepageComponent },
{path: 'register', component:RegisterComponent},
{path: 'login', component:LoginComponent},
{path: 'destination', component:AdmRoutesComponent},
{path: 'search', component:SearchComponent},
{path: 'wallet', component:WalletComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
