import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { authInterceptorProviders } from './services/auth.interceptor';
import { UserComponent } from './Components/user/user.component';
import { UserPanelComponent } from './Components/user-panel/user-panel.component';
import { AdminPanelComponent } from './Components/admin-panel/admin-panel.component';
import { FlatsComponent } from './Components/user-panel/flats/flats.component';
import { PaymentsComponent } from './Components/user-panel/payments/payments.component';
import { BuildingsComponent } from './Components/admin-panel/buildings/buildings.component';
import { AddEditBuildingComponent } from './Components/admin-panel/buildings/add-edit-building/add-edit-building.component';
import { FlatsManagementComponent } from './Components/admin-panel/flats-management/flats-management.component';
import { AddEditFlatComponent } from './Components/admin-panel/flats-management/add-edit-flat/add-edit-flat.component';
import { PaymentsManagementComponent } from './Components/admin-panel/payments-management/payments-management.component';
import { AddPaymentComponent } from './Components/admin-panel/payments-management/add-payment/add-payment.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    UserComponent,
    UserPanelComponent,
    AdminPanelComponent,
    FlatsComponent,
    PaymentsComponent,
    BuildingsComponent,
    AddEditBuildingComponent,
    FlatsManagementComponent,
    AddEditFlatComponent,
    PaymentsManagementComponent,
    AddPaymentComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
