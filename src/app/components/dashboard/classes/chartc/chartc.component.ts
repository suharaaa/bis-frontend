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
  selector: 'app-chartc',
  templateUrl: './chartc.component.html',
  styleUrls: ['./chartc.component.css']
})
export class ChartcComponent implements OnInit {

  public isloading:boolean;


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


  constructor(private statisticsService: StatisticsService,) { }

  ngOnInit() {

    this.isloading = true;

    //get students by classes
    this.statisticsService.getStudentsByClass().subscribe((response: APIResponse) => {
    
      this.BarChartData[0].data[0] = response.data.thisYear01;
  
      this.BarChartData[1].data[0]= response.data.thisYear02;
    
      this.BarChartData[2].data[0] = response.data.thisYear03;
      
      this.BarChartData[3].data[0] = response.data.thisYear04;
    
      this.BarChartData[4].data[0]= response.data.thisYear05;

      this.isloading = false;
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
