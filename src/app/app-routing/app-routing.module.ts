import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from '../welcome/welcome.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { LoginComponent } from '../login/login.component';
import { LogoutComponent } from '../logout/logout.component';

const routes: Routes = [
  {path: '', component: WelcomeComponent,},
  {path: 'welcome', component: WelcomeComponent,},
  {path: 'login', component: LoginComponent,},
  {path: 'logout', component: LogoutComponent,},
  {path: 'dashboard', component: DashboardComponent,},
];

@NgModule({
  exports: [
    RouterModule
  ],
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
