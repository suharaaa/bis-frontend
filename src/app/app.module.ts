import { TeacherService } from './services/teacher.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';


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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AttendanceComponent } from './components/dashboard/attendance/attendance.component';
import { FeesComponent } from './components/dashboard/fees/fees.component';
import { AddfeesComponent } from './components/dashboard/fees/addfees/addfees.component';
import { UpdatefeesComponent,FeeDialogBox } from './components/dashboard/fees/updatefees/updatefees.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { NoticeComponent } from './components/dashboard/notice/notice.component';
import { PublishNComponent } from './components/dashboard/notice/publish-n/publish-n.component';
import { ViewNComponent, DeleteDialogBox } from './components/dashboard/notice/view-n/view-n.component';
import { UpdateUnenrollComponent, DialogBox } from './components/dashboard/student/update-unenroll/update-unenroll.component';
import { TeacherComponent } from './components/dashboard/teacher/teacher.component';
import { AddTComponent } from './components/dashboard/teacher/add-t/add-t.component';
import { ManageTComponent, TDialogBox } from './components/dashboard/teacher/manage-t/manage-t.component';
import { StudentfeesComponent } from './components/homepage/studentfees/studentfees.component';
import { SubjectComponent } from './components/dashboard/subject/subject.component';
import { AddsubComponent } from './components/dashboard/subject/addsub/addsub.component';

import { SubjectServices } from './services/subject.service';
import { ResultsService } from './services/addResults.service';


import { NoticeService } from './services/notice.service';
import { StudentService } from './services/student.service';
import { ClassServices } from './services/classes.service';
import { AddcComponent } from './components/dashboard/classes/addc/addc.component';

import { ClassesComponent } from './components/dashboard/classes/classes.component';
import { SignupComponent } from './components/signup/signup.component';
import { EditsubComponent } from './components/dashboard/subject/editsub/editsub.component';
import { EditcComponent } from './components/dashboard/classes/editc/editc.component';
import { NoticeboardComponent } from './components/homepage/noticeboard/noticeboard.component';
import { TeachersComponent } from './components/dashboard/attendance/teachers/teachers.component';
import { CreateAComponent } from './components/dashboard/attendance/teachers/create-a/create-a.component';
import { ViewAComponent } from './components/dashboard/attendance/teachers/view-a/view-a.component';
import { UpdateAComponent } from './components/dashboard/attendance/teachers/update-a/update-a.component';
import { ResultsComponent } from './components/homepage/results/results.component';
import { AddResultsComponent, DialogBoxResults  } from './components/homepage/results/add-results/add-results.component';
import { StudentResComponent } from './components/homepage/results/student-res/student-res.component';
import { UsersComponent } from './components/dashboard/users/users.component';
import { ViewUsersComponent } from './components/dashboard/users/view-users/view-users.component';


import { StudentArchiveComponent, DialogBoxStudentDel } from './components/dashboard/student/student-archive/student-archive.component';
import { AttendanceService } from './services/attendance.service';
import { DatePipe } from '@angular/common';
import { ViewStudentComponent } from './components/dashboard/student/update-unenroll/view-student/view-student.component';

import { HomeComponent } from './components/homepage/home/home.component';
import { UpdatesubComponent, DialogBoxComponent } from './components/dashboard/subject/updatesub/updatesub.component';
import { ViewcComponent, DialogBoxComponent2 } from './components/dashboard/classes/viewc/viewc.component';
import { ClasseshomeComponent } from './components/homepage/classes/classes.component';
import { SubjecthomeComponent } from './components/homepage/subject/subject.component';
import { DeletedListComponent, TDialogBox2 } from './components/dashboard/teacher/deleted-list/deleted-list.component';
import { ProfitComponent } from './components/dashboard/fees/profit/profit.component';
import { ViewTComponent } from './components/dashboard/teacher/view-t/view-t.component';
import { Report1Component } from './components/dashboard/teacher/report1/report1.component';
import { PrintNComponent } from './components/dashboard/notice/print-n/print-n.component';
import { SummaryAComponent } from './components/dashboard/attendance/teachers/summary-a/summary-a.component';


@NgModule({
  entryComponents: [
    UpdateUnenrollComponent,
    DialogBox,
    UpdatesubComponent, 
    DialogBoxComponent,
    DialogBoxComponent2,
    ViewcComponent,
    UpdateUnenrollComponent, 
    DialogBox,
    DeleteDialogBox,
    FeeDialogBox,
    UpdatefeesComponent,
    ViewNComponent,
    DeleteDialogBox,
    TDialogBox,
    TDialogBox2,
    DialogBoxResults,

    StudentArchiveComponent,
    DialogBoxStudentDel
  ],
  
  declarations: [
    AppComponent,
    StudentComponent,
    DashboardComponent,
    LoginComponent,
    OverviewComponent,
    AddSComponent,
    UpdateUnenrollComponent,
    DialogBox,
    StudentArchiveComponent,
    DialogBoxStudentDel,
    AttendanceComponent,
    FeesComponent,
    AddfeesComponent,
    UpdatefeesComponent,
    HomepageComponent,
    NoticeComponent,
    PublishNComponent,
    ViewNComponent,
    TeacherComponent,
    AddTComponent,
    ManageTComponent,
    StudentfeesComponent,
    SubjectComponent,
    AddsubComponent,
    UpdatesubComponent,
    AddcComponent,
    ViewcComponent,
    ClassesComponent,
    SignupComponent,
    EditsubComponent,
    EditcComponent,
    NoticeboardComponent,
    TeachersComponent,
    CreateAComponent,
    ViewAComponent,
    UpdateAComponent,
    ResultsComponent,
    AddResultsComponent,
    StudentResComponent,
    UsersComponent,
    ViewUsersComponent,
    
   
    ViewStudentComponent,
    HomeComponent,
    DialogBoxComponent,
    DialogBoxComponent2,
    DeleteDialogBox,
    ClasseshomeComponent,
    SubjecthomeComponent,
   
    // DeleteHistoryComponent,
    DeletedListComponent,
    FeeDialogBox,
    DeletedListComponent,
    ProfitComponent,
    ViewTComponent,
    TDialogBox,
    TDialogBox2,
    Report1Component,
    DialogBoxResults,
    PrintNComponent,
    SummaryAComponent
    
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule,
    ChartsModule,


    ],
  providers: [
    DatePipe,
    MatDatepickerModule,
    AttendanceService,
    NoticeService,
    SubjectServices,
    StudentService,
    ClassServices,
    TeacherService,
    ResultsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
