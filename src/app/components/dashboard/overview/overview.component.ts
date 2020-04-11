import { Component, OnInit } from '@angular/core';
import { faSchool } from '@fortawesome/free-solid-svg-icons';
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import { faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons';
import { StudentErrorStateMatcher } from 'src/app/helpers/student-error-state-matcher';
import { ErrorStateMatcher, MatSnackBar } from '@angular/material';
import { StatisticsService } from 'src/app/services/statistics.service';
import { APIResponse } from 'src/app/models/apiresponse';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  faSchool = faSchool;
  faUserGraduate =faUserGraduate;
  faChalkboardTeacher = faChalkboardTeacher;

  public statistics = {
    studentCount: 0,
    teacherCount: 0,
    classesCount: 0
  };

  constructor(
    private statisticsService: StatisticsService
  ) { }

  ngOnInit() {
    this.statisticsService.getAllStatistics().subscribe((response: APIResponse) => {
      this.statistics = response.data;
    })
  }

}
