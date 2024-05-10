import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    DashboardComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class AdminRoutingModule { }
