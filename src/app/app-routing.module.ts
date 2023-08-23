import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { AddDoctorComponent } from './add-doctor/add-doctor.component';
import { AddTimecardSelectComponent } from './add-timecard-select/add-timecard-select.component';
import { AddTimecardComponent } from './add-timecard/add-timecard.component';
import { AdminDisplayComponent } from './admin-display/admin-display.component';
import { AdministrationComponent } from './administration/administration.component';
import { DoctorDisplayComponent } from './doctor-display/doctor-display.component';
import { EditAdminComponent } from './edit-admin/edit-admin.component';
import { EditDoctorComponent } from './edit-doctor/edit-doctor.component';
import { EditTimecardComponent } from './edit-timecard/edit-timecard.component';
import { LoginComponent } from './login/login.component';
import { ReportComponent } from './report/report.component';
import { RouteGuardGuard } from './services/route-guard.guard';
import { TimecardmanagementComponent } from './timecardmanagement/timecardmanagement.component';
import { ViewTimecardSelectComponent } from './view-timecard-select/view-timecard-select.component';
import { ViewTimecardComponent } from './view-timecard/view-timecard.component';

const routes: Routes = [
  { path: 'login', component:LoginComponent },
  { path: 'administration', component:AdministrationComponent, canActivate: [RouteGuardGuard],
    canActivateChild: [RouteGuardGuard],
    children:
      [{ path: 'admin-list', component: AdminDisplayComponent },
       { path: 'doctor-list', component: DoctorDisplayComponent },
       { path: 'add-admin', component: AddAdminComponent },
       { path: 'edit-admin/:id', component: EditAdminComponent },
       { path: 'add-doctor', component: AddDoctorComponent },
       { path: 'edit-doctor/:id', component: EditDoctorComponent }] },
  { path: 'timecardmanagement', component:TimecardmanagementComponent, canActivate: [RouteGuardGuard],
    canActivateChild: [RouteGuardGuard],
    children:
      [{ path: 'view-timecard-select', component: ViewTimecardSelectComponent },
       { path: 'view-timecard/:id', component: ViewTimecardComponent },
       { path: 'add-timecard-select', component: AddTimecardSelectComponent },
       { path: 'add-timecard/:id', component: AddTimecardComponent },
       { path: 'edit-timecard/:id', component:EditTimecardComponent }] },
  { path: 'reports', component:ReportComponent, canActivate: [RouteGuardGuard],
    canActivateChild: [RouteGuardGuard]
   },
  //{ path: 'admin-list', component: AdminDisplayComponent },
  //{ path: 'doctor-list', component: DoctorDisplayComponent },
  //{ path: 'add-admin', component: AddAdminComponent },
  //{ path: 'edit-admin', component: EditAdminComponent },
  //{ path: 'add-doctor', component: AddDoctorComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
