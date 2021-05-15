import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { CustomerComponent } from './customer/customer.component';


@NgModule({
  declarations: [
    DashboardComponent,
    RegisterComponent,
    LoginComponent,
    AboutComponent,
    CustomerComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
