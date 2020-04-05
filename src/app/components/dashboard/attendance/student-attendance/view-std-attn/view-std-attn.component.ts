import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { AttendanceService } from 'src/app/services/attendance.service';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router'

interface APIResponse {
  success : boolean,
  data : any
}

@Component({
  selector: 'app-view-std-attn',
  templateUrl: './view-std-attn.component.html',
  styleUrls: ['./view-std-attn.component.css']
})

export class ViewStdAttnComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}



