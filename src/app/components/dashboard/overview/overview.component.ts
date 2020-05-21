import { Component, OnInit } from '@angular/core';
import { faSchool } from '@fortawesome/free-solid-svg-icons';
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import { faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons';
import { StudentErrorStateMatcher } from 'src/app/helpers/student-error-state-matcher';
import { ErrorStateMatcher, MatSnackBar } from '@angular/material';
import { StatisticsService } from 'src/app/services/statistics.service';
import { APIResponse } from 'src/app/models/apiresponse';

import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { AttendanceService } from 'src/app/services/attendance.service';
import { ChartType, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
import * as html2pdf from 'html2pdf.js';

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

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
  };


  public isLoading: boolean;
  public isLoadingPieChart: boolean;
  public isloading:boolean;
  
  public barChartLabels = [new Date().getFullYear() - 1, new Date().getFullYear()];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    { data: [0, 0], label: 'Female', backgroundColor: '#f69223' },
    { data: [0, 0], label: 'Male', backgroundColor: '#1f3146' }
  ];



  public BarChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
  };

 
  //get students by classes
  public BarChartLabels = [ new Date().getFullYear()];
  public BarChartType = 'bar';
  public BarChartLegend = true;
  public BarChartData = [
    { data: [0,0], label: 'Grade 01', backgroundColor: '#f69223' },
    { data: [0,0], label: 'Grade 02', backgroundColor: '#90ec3a' },
    { data: [0,0], label: 'Grade 03', backgroundColor:  '#1f3146'},
    { data: [0,0], label: 'Grade 04', backgroundColor: '#3a8dec' },
    { data: [0,0], label: 'Grade 05', backgroundColor: '#ec3aa2' },
  ];




  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'top',
    },
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          const label = ctx.chart.data.labels[ctx.dataIndex];
          return label;
        },
      },
    }
  };
  public pieChartLabels: Label[] = [['Present'], ['Absent']];
  public pieChartData: number[] = [2, 7];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [pluginDataLabels];
  public pieChartColors = [
    {
      backgroundColor: ['#f69223', '#1f3146'],
    },
  ];

  constructor(
    private statisticsService: StatisticsService,
    private attendanceService: AttendanceService
  ) { }

  ngOnInit() {

    this.isLoading = true;
    this.isLoadingPieChart = true;
    this.isloading = true;

    this.statisticsService.getAllStatistics().subscribe((response: APIResponse) => {
      this.statistics = response.data;
    });
    
    this.statisticsService.getEnrollmentsByYear().subscribe((response: APIResponse) => {
      this.barChartData[0].data[0] = response.data.lastYearFemale;
      this.barChartData[0].data[1] = response.data.thisYearFemale;
      this.barChartData[1].data[0] = response.data.lastYearMale;
      this.barChartData[1].data[1] = response.data.thisYearMale;
      this.isLoading = false;
    });



    //get students by classes
    this.statisticsService.getStudentsByClass().subscribe((response: APIResponse) => {
    
      this.BarChartData[0].data[0] = response.data.thisYear01;
  
      this.BarChartData[1].data[0]= response.data.thisYear02;
    
      this.BarChartData[2].data[0] = response.data.thisYear03;
      
      this.BarChartData[3].data[0] = response.data.thisYear04;
    
      this.BarChartData[4].data[0]= response.data.thisYear05;

      this.isloading = false;
    });





    this.attendanceService.getAttendanceByDate(new Date()).subscribe((response: APIResponse) => {
      this.pieChartData[0] = response.data.reduce((c, a) => {
        if (a.status === 'present') {
          return c + 1;
        } else {
          return c;
        }
      }, 0);

      this.pieChartData[1] = response.data.reduce((c, a) => {
        if (a.status === 'absent') {
          return c + 1;
        } else {
          return c;
        }
      }, 0);

      this.isLoadingPieChart = false;
    });
  }



//generate pdf
  public downloadPDF () {

    const options ={
  
     name : 'subjectSummary.pdf',
     image : { type : 'jpeg'},
     html2canvas : {},
     jsPDF : {orientation:'landscape'}
    }
  
    const element : Element = document.getElementById('content');
    html2pdf()
  
       .from(element)
       .set(options)
       .save('report.pdf')
  
     }
}
