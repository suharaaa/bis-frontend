import { Component, OnInit } from '@angular/core';

export interface DailyAttendance {
  date: string;
  attendance: number;
}

@Component({
  selector: 'app-view-std-attn',
  templateUrl: './view-std-attn.component.html',
  styleUrls: ['./view-std-attn.component.css']
})

@Component({
  selector: 'table-footer-row-example',
  styleUrls: ['./view-std-attn.component.css'],
  templateUrl: './view-std-attn.component.html',
})

export class ViewStdAttnComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  displayedColumns: string[] = ['date', 'attendance'];
  count: DailyAttendance[] = [
    {date: '03/03/2020', attendance: 40},
    {date: '04/03/2020', attendance: 40},
    {date: '05/03/2020', attendance: 40},
    {date: '06/03/2020', attendance: 37},
  ];

  getTotal() {
    return this.count.map(c => c.attendance).reduce((acc, value) => acc + value, 0);
  }

  durations: string[] = [
    'Daily', 'Monthly', 'Annually'
  ];

  classes: string[] = [
    'Grade 1','Grade 2', 'Grade 3', 'Grade 4', 'Grade 5', 'Grade 6', 'Grade 7', 'Grade 8', 
    'Grade 9', 'Grade 10', 'Grade 11', 'Grade 12', 'Grade 13'
  ];
}



