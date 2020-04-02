import { Component, OnInit } from '@angular/core';

export interface DailyAttendance {
  date: string;
  attendance: number;
}

@Component({
  selector: 'app-view-tch-attn',
  templateUrl: './view-tch-attn.component.html',
  styleUrls: ['./view-tch-attn.component.css']
})

@Component({
  selector: 'table-footer-row-example',
  styleUrls: ['./view-tch-attn.component.css'],
  templateUrl: './view-tch-attn.component.html',
})

export class ViewTchAttnComponent implements OnInit {

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
}
