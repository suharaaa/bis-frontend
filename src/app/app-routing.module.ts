import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { StudentComponent } from './components/dashboard/student/student.component';
import { OverviewComponent } from './components/dashboard/overview/overview.component';
import { AddSComponent } from './components/dashboard/student/add-s/add-s.component';
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
import { SubjectComponent } from './components/dashboard/subject/subject.component';
import { AddsubComponent } from './components/dashboard/subject/addsub/addsub.component';
import { EditsubComponent } from './components/dashboard/subject/editsub/editsub.component';
import { UpdatesubComponent } from './components/dashboard/subject/updatesub/updatesub.component';
import { ClassesComponent } from './components/dashboard/classes/classes.component';
import { AddcComponent } from './components/dashboard/classes/addc/addc.component';
import { ViewcComponent } from './components/dashboard/classes/viewc/viewc.component';
import { EditcComponent } from './components/dashboard/classes/editc/editc.component';
import { SignupComponent } from './components/signup/signup.component';
import { NoticeboardComponent } from './components/homepage/noticeboard/noticeboard.component';
import { TeachersComponent } from './components/dashboard/attendance/teachers/teachers.component';
import { CreateAComponent } from './components/dashboard/attendance/teachers/create-a/create-a.component';
import { ViewAComponent } from './components/dashboard/attendance/teachers/view-a/view-a.component';
import { UpdateAComponent } from './components/dashboard/attendance/teachers/update-a/update-a.component';
import { FeesComponent } from './components/dashboard/fees/fees.component';
import { AddfeesComponent } from './components/dashboard/fees/addfees/addfees.component';
import { UpdatefeesComponent } from './components/dashboard/fees/updatefees/updatefees.component';
import { HomeComponent } from './components/homepage/home/home.component';
import { StudentArchiveComponent } from './components/dashboard/student/student-archive/student-archive.component';
import { DeletedListComponent } from './components/dashboard/teacher/deleted-list/deleted-list.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'overview' },
      { path: 'overview', component: OverviewComponent },
      {
        path: 'student',
        component: StudentComponent,
        children: [
          { path: '', pathMatch: 'full', redirectTo: 'update' },
          { path: 'add', component: AddSComponent },
          { path: 'update', component: UpdateUnenrollComponent },
          { path: 'archive', component: StudentArchiveComponent }
        ]
      },
      {
        path: 'attendance',
        component: AttendanceComponent,
        children: [
          {
            path: 'teachers',
            component: TeachersComponent,
            children: [
              { path: 'create', component: CreateAComponent },
              {
                path: 'view', component: ViewAComponent,
                children: [
                  { path: 'update', component: UpdateAComponent }
                ]
              },
            ]
          },
        ]
      },
      {
        path: 'fees',
        component: FeesComponent,
        children: [
          { path: 'addfees', component: AddfeesComponent },
          { path: 'updatefees1', component: UpdatefeesComponent },

        ]
      },
      {
        path: 'notice',
        component: NoticeComponent,
        children: [

          { path: 'publish', component: PublishNComponent},
          { path: 'view', component: ViewNComponent} 
        ]},

      { 
        path: 'teacher',
        component: TeacherComponent,
        children: [
          { path: 'add', component: AddTComponent},
          { path: 'manage', component: ManageTComponent},
          { path: 'history', component: DeletedListComponent},
          // { path: 'view', component: ViewTComponent}
        ]},
        { path: 'subject',
        component: SubjectComponent,
        children: [
          { path: 'addsub', component: AddsubComponent },
          { path: 'updatesub', component: UpdatesubComponent },
          { path: 'editsub', component: EditsubComponent }
        ]
      },
      {
        path: 'classes',
        component: ClassesComponent,
        children: [
          { path: 'addc', component: AddcComponent },
          { path: 'viewc', component: ViewcComponent },
          { path: 'editc', component: EditcComponent }
        ]
      }
    ]
  },

  {path: 'homepage', 
  component: HomepageComponent,
    children:[
      { path: '', pathMatch: 'full', redirectTo: 'home' },
      { path: 'home', component: HomeComponent },
      { path: 'noticeboard', component: NoticeboardComponent },
      { path: 'results', 
      component: ResultsComponent,
        children: [
          {path:'addResults', component: AddResultsComponent},
          {path:'student-res', component: StudentResComponent}
        ]
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
