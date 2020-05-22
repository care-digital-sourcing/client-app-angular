import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from '../welcome/welcome.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { LoginComponent } from '../login/login.component';
import { LogoutComponent } from '../logout/logout.component';
import { SideMenuComponent } from '../side-menu/side-menu.component';
import { PlacementsComponent } from '../placements/placements.component';
import { ErrorComponent } from '../error/error.component';
import { RouteGuardService } from '../service/route-guard.service';

const routes: Routes = [
  {path: '', component: WelcomeComponent,},
  {path: 'welcome', component: WelcomeComponent,},
  {path: 'login', component: LoginComponent,},
  {path: 'logout', component: LogoutComponent, canActivate:[RouteGuardService]},
  {path: 'dashboard', component: DashboardComponent, canActivate:[RouteGuardService]},
  {path: 'placements', component: PlacementsComponent, canActivate:[RouteGuardService]},
  { path: '**', component: ErrorComponent, }
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
