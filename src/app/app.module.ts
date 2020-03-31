import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

<<<<<<< HEAD
 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './components/dashboard/student/student.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { OverviewComponent } from './components/dashboard/overview/overview.component';
import { AddSComponent } from './components/dashboard/student/add-s/add-s.component';
import { MatDatepickerModule } from '@angular/material';

import { AttendanceComponent } from './components/dashboard/attendance/attendance.component';
import { StudentAttendanceComponent } from './components/dashboard/attendance/student-attendance/student-attendance.component';
import { TeacherAttendanceComponent } from './components/dashboard/attendance/teacher-attendance/teacher-attendance.component';
import { SubjectComponent } from './components/dashboard/subject/subject.component';
import { AddsubComponent } from './components/dashboard/subject/addsub/addsub.component';
import { UpdatesubComponent } from './components/dashboard/subject/updatesub/updatesub.component';
import { DeletesubComponent } from './components/dashboard/subject/deletesub/deletesub.component';


@NgModule({
  declarations: [
    AppComponent,
  
    StudentComponent,
    DashboardComponent,
    LoginComponent,
    OverviewComponent,
    AddSComponent,
  
    AttendanceComponent,
    StudentAttendanceComponent,
    TeacherAttendanceComponent,
    SubjectComponent,
    AddsubComponent,
    UpdatesubComponent,
    DeletesubComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
    


  providers: [MatDatepickerModule],
=======
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
>>>>>>> b5f77a274e5e1e24df4b9ae298a045d29a1a3b43
  bootstrap: [AppComponent]
})
export class AppModule { }
