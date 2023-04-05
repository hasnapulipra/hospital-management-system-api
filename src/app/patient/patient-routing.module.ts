import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppoinmentHistoryComponent } from './appoinment-history/appoinment-history.component';
import { AppoinmentStatusComponent } from './appoinment-status/appoinment-status.component';
import { BookAppoinmentComponent } from './book-appoinment/book-appoinment.component';
import { PatientDashboardComponent } from './patient-dashboard/patient-dashboard.component';
import { PatientComponent } from './patient.component';
import { PaymentComponent } from './payment/payment.component';
import { PrescriptionComponent } from './prescription/prescription.component';
import { ReceiptOfPaymentComponent } from './receipt-of-payment/receipt-of-payment.component';
import { TreatmentHistoryComponent } from './treatment-history/treatment-history.component';

import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { ViewDoctorComponent } from './view-doctor/view-doctor.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';

const routes: Routes = [
  // { path: '', component: PatientComponent }
  {path:'',component:PatientComponent,children:[
    {path:'',redirectTo:'patient-dashboard',pathMatch:'full'},
    {path:'patient-dashboard',component:PatientDashboardComponent},
    {path:'appoinment-status',component:AppoinmentStatusComponent},
    {path:'appoinment-history',component:AppoinmentHistoryComponent},
    {path:'treatment-history',component:TreatmentHistoryComponent},
    {path:'prescription',component:PrescriptionComponent},
    {path:'book-appoinment',component:BookAppoinmentComponent},
    {path:'payment',component:PaymentComponent},
    {path:'receipt-of-payment',component:ReceiptOfPaymentComponent},
    
    {path:'update-profile',component:UpdateProfileComponent},
    {path:'view-doctor',component:ViewDoctorComponent},
    {path:'view-profile',component:ViewProfileComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientRoutingModule { }
