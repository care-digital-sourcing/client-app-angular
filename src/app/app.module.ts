import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { PlacementsComponent } from './placements/placements.component';
import { FormsModule } from '@angular/forms';
import { ErrorComponent } from './error/error.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProvidersComponent } from './providers/providers.component';
import { CarePackagesComponent } from './care-packages/care-packages.component';

import {AgmCoreModule} from '@agm/core'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    WelcomeComponent,
    DashboardComponent,
    LoginComponent,
    LogoutComponent,
    SideMenuComponent,
    PlacementsComponent,
    ErrorComponent,
    ProvidersComponent,
    CarePackagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAgFWnR4AkmV5xb_DbgtF1dvp_98pVsn5A'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
