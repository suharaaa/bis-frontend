
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
import { HomepageComponent } from './components/homepage/homepage.component';
import { ResultsComponent } from './components/homepage/results/results.component';
import { AddResultsComponent } from './components/homepage/results/add-results/add-results.component';
import { StudentResComponent } from './components/homepage/results/student-res/student-res.component';

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

    ]
  },
  {path: 'homepage', component: HomepageComponent,
  children:[
    {path: 'results', component: ResultsComponent},
      {path:'addResults', component: AddResultsComponent},
      {path: 'student-res', component: StudentResComponent},
    ]
     
  }
  

  
  ]; 


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
