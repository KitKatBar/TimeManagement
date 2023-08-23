import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule }from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from  '@angular/material/list';
import { LoginComponent } from './login/login.component';
import { AdministrationComponent } from './administration/administration.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTabsModule } from '@angular/material/tabs';
import { TimecardmanagementComponent } from './timecardmanagement/timecardmanagement.component';
import { ReportComponent } from './report/report.component';
import { RegisterComponent } from './register/register.component';
import { AdminDisplayComponent } from './admin-display/admin-display.component';
import { DoctorDisplayComponent } from './doctor-display/doctor-display.component';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { EditAdminComponent } from './edit-admin/edit-admin.component';
import { AddDoctorComponent } from './add-doctor/add-doctor.component';
import { ViewTimecardComponent } from './view-timecard/view-timecard.component';
import { AddTimecardComponent } from './add-timecard/add-timecard.component';
import { EditDoctorComponent } from './edit-doctor/edit-doctor.component';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';

import { EditTimecardComponent } from './edit-timecard/edit-timecard.component';
import { ViewTimecardSelectComponent } from './view-timecard-select/view-timecard-select.component';
import { AddTimecardSelectComponent } from './add-timecard-select/add-timecard-select.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdministrationComponent,
    TimecardmanagementComponent,
    ReportComponent,
    RegisterComponent,
    AdminDisplayComponent,
    DoctorDisplayComponent,
    AddAdminComponent,
    EditAdminComponent,
    AddDoctorComponent,
    ViewTimecardComponent,
    AddTimecardComponent,
    EditDoctorComponent,
    EditTimecardComponent,
    ViewTimecardSelectComponent,
    AddTimecardSelectComponent,
    
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    MatCardModule,
    MatTabsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    NgbModule,
    MatNativeDateModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
