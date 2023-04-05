import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDoctorComponent } from './add-doctor/add-doctor.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminComponent } from './admin.component';
import { PaymentRequestComponent } from './payment-request/payment-request.component';
import { RecordsComponent } from './records/records.component';
import { UpdateDetailsOfDoctorComponent } from './update-details-of-doctor/update-details-of-doctor.component';
import { ViewDoctorComponent } from './view-doctor/view-doctor.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';

const routes: Routes = [
  {path:'',component:AdminComponent,children:[
  {path:'',redirectTo:'doctors-dashboard',pathMatch:'full'},
  {path:'',component:AdminDashboardComponent},
  {path:'admin-dashboard',component:AdminDashboardComponent},
  {path:'view-profile',component:ViewProfileComponent},
  {path:'add-doctor',component:AddDoctorComponent},
  {path:'update-doctor-details',component:UpdateDetailsOfDoctorComponent},
  {path:'view-doctors',component:ViewDoctorComponent},
  {path:'payment-request',component:PaymentRequestComponent},
  {path:'records',component:RecordsComponent},
  
]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
