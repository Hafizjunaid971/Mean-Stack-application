import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";
import { AboutComponent } from './about/about.component';
import { CustomerComponent } from './customer/customer.component';

const routes: Routes = [
  {
    path: "",
    component: DashboardComponent
  },

  {  component:AboutComponent, path:'about'

  },
  {  component:CustomerComponent, path:'customer'

  },

  {
    path: "login",
    component: LoginComponent
  },

  {
    path: "register",
    component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {}
