import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { UserComponent } from './Components/user/user.component';
import { FlatsComponent } from './Components/user-panel/flats/flats.component';
import { PaymentsComponent } from './Components/user-panel/payments/payments.component';
import { BuildingsComponent } from './Components/admin-panel/buildings/buildings.component';
import { AddEditBuildingComponent } from './Components/admin-panel/buildings/add-edit-building/add-edit-building.component';
import { FlatsManagementComponent } from './Components/admin-panel/flats-management/flats-management.component';
import { AddEditFlatComponent } from './Components/admin-panel/flats-management/add-edit-flat/add-edit-flat.component';
import { PaymentsManagementComponent } from './Components/admin-panel/payments-management/payments-management.component';
import { AddPaymentComponent } from './Components/admin-panel/payments-management/add-payment/add-payment.component';

const routes: Routes = [
	{ path: '', component: LoginComponent },
	{ path: 'register', component: RegisterComponent },
	{ path: 'user', component: UserComponent },
	{ path: 'user/flats', component: FlatsComponent },
  { path: 'user/payments', component: PaymentsComponent },
  { path: 'admin/buildings', component: BuildingsComponent },
  { path: 'admin/buildings/add', component: AddEditBuildingComponent },
  { path: 'admin/buildings/edit/:id', component: AddEditBuildingComponent },
  { path: 'admin/flats', component: FlatsManagementComponent },
  { path: 'admin/flats/add', component: AddEditFlatComponent },
  { path: 'admin/flats/edit/:id', component: AddEditFlatComponent },
  { path: 'admin/payments', component: PaymentsManagementComponent },
  { path: 'admin/payments/add', component: AddPaymentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
