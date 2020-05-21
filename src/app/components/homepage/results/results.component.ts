import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators} from '@angular/forms';
import { ResultsService } from 'src/app/services/addResults.service';
import { MatSnackBar, MatTableDataSource } from '@angular/material';
import { ActivatedRoute } from '@angular/router';

import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { AttendanceService } from 'src/app/services/attendance.service';
import { ChartType, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
import { StatisticsService } from 'src/app/services/statistics.service';
import * as html2pdf from 'html2pdf.js';
import { FullscreenOverlayContainer } from '@angular/cdk/overlay';

interface APIResponse {
  success : boolean,
  data : any
}

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  displayedColumns: string[] = [ 'students','class','term','subject','marks'];
  dataSource = new MatTableDataSource();
  

  public statistics = {
    marks: 0,
    
  };
  
  

  constructor(
    private resultsService: ResultsService,
    private snackBar: MatSnackBar,
    private router : Router,
    private statisticsService: StatisticsService
  )
 
  { 
  }

  ngOnInit() {
    this.viewResults();

  }

 

  applyFilter(keyword) {
    
    this.dataSource.filter = keyword.trim().toLowerCase();
  }

  
  
  viewResults(){
    this.resultsService.viewResults().subscribe((res: any) => {
     this.dataSource = new MatTableDataSource(res.data);
     this.dataSource.filterPredicate = this.filterPredicate;
    }, err => {
      console.log(err.message);
    });

  }

  private filterPredicate = (data, filter: string) => {
    const accumulator = (currentTerm, key) => {
      return this.nestedFilterCheck(currentTerm, data, key);
    };
    const dataStr = Object.keys(data).reduce(accumulator, '').toLowerCase();
    const transformedFilter = filter.trim().toLowerCase();
    return dataStr.indexOf(transformedFilter) !== -1;
  }
  
  private nestedFilterCheck(applyFilter, data, key) {
    if (typeof data[key] === 'object') {
      for (const k in data[key]) {
        if (data[key][k] !== null) {
          applyFilter = this.nestedFilterCheck(applyFilter, data[key], k);
        }
      }
    } else {
      applyFilter += data[key];
    }
    return applyFilter;
  }

  public downloadPDF () {

    const options ={

     name : 'output.pdf',
     document: { type : 'jpeg'},
     html2canvas : {},
     jsPDF : {orientation:'landscape'}
    }

    const element : Element = document.getElementById('content');
    html2pdf()

       .from(element)
       .set(options)
       .save()

     }

}
