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
import { FeesComponent } from './components/dashboard/fees/fees.component';
import { AddfeesComponent } from './components/dashboard/fees/addfees/addfees.component';
import { UpdatefeesComponent } from './components/dashboard/fees/updatefees/updatefees.component';
import { HomepageComponent } from './components/homepage/homepage.component';

import { from } from 'rxjs';


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
        { path: 'fees', 
        component: FeesComponent,
        children: [
          { path: 'addfees', component: AddfeesComponent},
          { path: 'updatefees1', component: UpdatefeesComponent},
          
          ]}
         
        
    ]
  },

  { path: 'homepage', component: HomepageComponent }




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
