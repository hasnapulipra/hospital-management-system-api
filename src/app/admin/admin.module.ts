import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { PaymentRequestComponent } from './payment-request/payment-request.component';
import { AddDoctorComponent } from './add-doctor/add-doctor.component';
import { UpdateDetailsOfDoctorComponent } from './update-details-of-doctor/update-details-of-doctor.component';
import { RecordsComponent } from './records/records.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewDoctorComponent } from './view-doctor/view-doctor.component';
import { MaterialModule } from '../material/material.module';
import { SearchComponent } from './search/search.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AdminComponent,
    ViewProfileComponent,
    PaymentRequestComponent,
    AddDoctorComponent,
    UpdateDetailsOfDoctorComponent,
    RecordsComponent,
    AdminDashboardComponent,
    ViewDoctorComponent,
    SearchComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    RouterModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
  ]
})
export class AdminModule { }
