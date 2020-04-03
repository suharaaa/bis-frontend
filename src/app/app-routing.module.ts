
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
import { NoticeComponent } from './components/dashboard/notice/notice.component';
import { PublishNComponent } from './components/dashboard/notice/publish-n/publish-n.component';
import { ViewNComponent } from './components/dashboard/notice/view-n/view-n.component';
import { UpdateUnenrollComponent } from './components/dashboard/student/update-unenroll/update-unenroll.component';
import { TeacherComponent } from './components/dashboard/teacher/teacher.component';
import { AddTComponent } from './components/dashboard/teacher/add-t/add-t.component';
import { ManageTComponent } from './components/dashboard/teacher/manage-t/manage-t.component';
import { MarkStdAttnComponent } from './components/dashboard/attendance/student-attendance/mark-std-attn/mark-std-attn.component';
import { ViewStdAttnComponent } from './components/dashboard/attendance/student-attendance/view-std-attn/view-std-attn.component';
import { MarkTchAttnComponent } from './components/dashboard/attendance/teacher-attendance/mark-tch-attn/mark-tch-attn.component';
import { ViewTchAttnComponent } from './components/dashboard/attendance/teacher-attendance/view-tch-attn/view-tch-attn.component';
import { SubjectComponent } from './components/dashboard/subject/subject.component';
import { AddsubComponent } from './components/dashboard/subject/addsub/addsub.component';
import { UpdatesubComponent } from './components/dashboard/subject/updatesub/updatesub.component';
import { DeletesubComponent } from './components/dashboard/subject/deletesub/deletesub.component';
import { ClassesComponent } from './components/dashboard/classes/classes.component';
import { AddcComponent } from './components/dashboard/classes/addc/addc.component';
import { ViewcComponent } from './components/dashboard/classes/viewc/viewc.component';
import { SignupComponent} from './components/signup/signup.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
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

      { path: 'teacher',
        component: TeacherComponent,
        children: [
          { path: 'add', component: AddTComponent},
          { path: 'manage', component: ManageTComponent}
        ]},
        { path: 'subject',
        component: SubjectComponent,
        children: [
          { path: 'addsub', component: AddsubComponent},
          { path: 'updatesub', component: UpdatesubComponent},
          { path: 'deletesub', component: DeletesubComponent},
        ]},
        { path: 'classes',
        component: ClassesComponent,
        children: [
          { path: 'addc', component: AddcComponent},
          { path: 'viewc', component: ViewcComponent},
        ]}
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
