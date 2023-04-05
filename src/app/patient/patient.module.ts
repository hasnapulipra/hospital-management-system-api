import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientRoutingModule } from './patient-routing.module';
import { PatientComponent } from './patient.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { BookAppoinmentComponent } from './book-appoinment/book-appoinment.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { PaymentComponent } from './payment/payment.component';
import { ReceiptOfPaymentComponent } from './receipt-of-payment/receipt-of-payment.component';
import { AppoinmentStatusComponent } from './appoinment-status/appoinment-status.component';
import { ViewDoctorComponent } from './view-doctor/view-doctor.component';
import { PatientDashboardComponent } from './patient-dashboard/patient-dashboard.component';
import { RouterModule } from '@angular/router';
import { AppoinmentHistoryComponent } from './appoinment-history/appoinment-history.component';
import { MaterialModule } from '../material/material.module';

import { FormsModule } from '@angular/forms';
import { TreatmentHistoryComponent } from './treatment-history/treatment-history.component';
import { PrescriptionComponent } from './prescription/prescription.component';
import { SearchComponent } from './search/search.component';



@NgModule({
  declarations: [
    PatientComponent,
    ViewProfileComponent,
    BookAppoinmentComponent,
    UpdateProfileComponent,
    PaymentComponent,
    ReceiptOfPaymentComponent,
    AppoinmentStatusComponent,
    ViewDoctorComponent,
    PatientDashboardComponent,
    AppoinmentHistoryComponent,
    TreatmentHistoryComponent,
    PrescriptionComponent,
    SearchComponent,
    
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    PatientRoutingModule,
    MaterialModule,
    FormsModule,
  ]
})
export class PatientModule { }
