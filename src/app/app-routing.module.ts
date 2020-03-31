import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { StudentComponent } from './components/dashboard/student/student.component';
import { OverviewComponent } from './components/dashboard/overview/overview.component';
import { AddSComponent } from './components/dashboard/student/add-s/add-s.component';
import { StudentAttendanceComponent } from './components/dashboard/attendance/student-attendance/student-attendance.component';
import { TeacherAttendanceComponent } from './components/dashboard/attendance/teacher-attendance/teacher-attendance.component';
import { AttendanceComponent } from './components/dashboard/attendance/attendance.component';
import { SubjectComponent } from './components/dashboard/subject/subject.component';
import { AddsubComponent } from './components/dashboard/subject/addsub/addsub.component';
import { UpdatesubComponent } from './components/dashboard/subject/updatesub/updatesub.component';
import { DeletesubComponent } from './components/dashboard/subject/deletesub/deletesub.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'dashboard', 
    component: DashboardComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'overview' },
      { path: 'overview', component: OverviewComponent },
      { path: 'student', 
        component: StudentComponent,
        children: [
          { path: 'add', component: AddSComponent},
        ] },
      { path: 'attendance',
        component: AttendanceComponent,
        children: [
          { path: 'students', component: StudentAttendanceComponent},
          { path: 'teachers', component: TeacherAttendanceComponent},
        ] },
        { path: 'subject', 
        component: SubjectComponent,
        children: [
          { path: 'addsub', component: AddsubComponent},
          
          { path: 'deletesub', component: DeletesubComponent},
          { path: 'updatesub' , component: UpdatesubComponent}
        ] },
      
         
      
      
      
    ]
  }
];


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
