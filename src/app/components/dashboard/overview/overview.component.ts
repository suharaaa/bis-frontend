import { Component, OnInit } from '@angular/core';
import { faSchool } from '@fortawesome/free-solid-svg-icons';
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import { faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons';
import { StudentErrorStateMatcher } from 'src/app/helpers/student-error-state-matcher';
import { ErrorStateMatcher, MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  faSchool = faSchool;
  faUserGraduate =faUserGraduate;
  faChalkboardTeacher = faChalkboardTeacher;

  constructor() { }

  ngOnInit() {
  }

}
