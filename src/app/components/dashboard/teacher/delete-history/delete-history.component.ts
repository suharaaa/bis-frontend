import { Component, OnInit } from '@angular/core';
import { TeacherService } from 'src/app/services/teacher.service';
import {MatTableDataSource} from '@angular/material/table';
import { MatSnackBar } from '@angular/material';


@Component({
  selector: 'app-delete-history',
  templateUrl: './delete-history.component.html',
  styleUrls: ['./delete-history.component.css']
})
export class DeleteHistoryComponent implements OnInit {

  displayedColumns: string[] = ['id', 'fname', 'lname', 'phone', 'action'];
  dataSource = new MatTableDataSource();

  constructor(
    private teacherService: TeacherService,
    private snackbar: MatSnackBar
  ) { }

  ngOnInit() {
    this.showHistory();
  }

  showHistory() {
    this.teacherService.showHistory().subscribe((res: any) => {
      this.dataSource = res.data;
    }, err => {
      console.log(err.message);
    });
  }

  public deleteTeacher(id: string) {
    this.teacherService.deleteTeacher( id ).subscribe(res => {
      this.showHistory();
      this.snackbar.open('Deleted successfully!', '', { duration: 2000 });
    }, err => {
      this.snackbar.open(err.message, '', {
        duration: 2000
      });
    });
  }


}
