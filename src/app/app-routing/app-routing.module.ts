import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from '../welcome/welcome.component';

const routes: Routes = [
  {path: '', component: WelcomeComponent,},
  {path: 'welcome', component: WelcomeComponent,},
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
