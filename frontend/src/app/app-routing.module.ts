import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserRegistrationPageFormComponent} from "./pages/user-registration-page-form/user-registration-page-form.component";
import {CompanyRegistrationPageFormComponent} from "./pages/company-registration-page-form/company-registration-page-form.component";
import {LoginPageFormComponent} from "./pages/login-page-form/login-page-form.component";
import {UserHomePageFormComponent} from "./pages/user-home-page-form/user-home-page-form.component";
import {UserSubscriptionPageFormComponent} from "./pages/user-subscription-page-form/user-subscription-page-form.component";
import {EwalletPageFormComponent} from "./pages/ewallet-page-form/ewallet-page-form.component";
import {AdminHomePageFormComponent} from "./pages/admin-home-page-form/admin-home-page-form.component";
import {CategoryPageFormComponent} from "./pages/category-page-form/category-page-form.component";
import {CompanyHomePageFormComponent} from "./pages/company-home-page-form/company-home-page-form.component";
import {EwalletCompanyPageFormComponent} from "./pages/ewallet-company-page-form/ewallet-company-page-form.component";
import {AddServicePageFormComponent} from "./pages/add-service-page-form/add-service-page-form.component";
import {NotFoundFormComponent} from "./components/not-found-form/not-found-form.component";

const routes: Routes = [
  { path: 'registration-user', component: UserRegistrationPageFormComponent },
  { path: 'registration-company', component: CompanyRegistrationPageFormComponent},
  { path: 'login', component: LoginPageFormComponent },
  { path: 'user-subscription', component: UserSubscriptionPageFormComponent },
  { path: 'user-home', component: UserHomePageFormComponent },
  { path: 'ewallet', component: EwalletPageFormComponent },
  { path: 'admin-home', component: AdminHomePageFormComponent },
  { path: 'category', component: CategoryPageFormComponent },
  { path: 'company-home', component: CompanyHomePageFormComponent },
  { path: 'ewallet-company', component: EwalletCompanyPageFormComponent },
  { path: 'add-service', component: AddServicePageFormComponent },
  { path: '404', component: NotFoundFormComponent},
  {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
