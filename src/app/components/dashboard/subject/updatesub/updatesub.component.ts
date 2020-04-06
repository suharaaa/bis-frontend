import { Component, OnInit } from '@angular/core';
import { SubjectServices } from 'src/app/services/subject.service';
import { ClassServices } from 'src/app/services/classes.service';
import {  MatSnackBar } from '@angular/material';
import {MatTableDataSource} from '@angular/material/table';

interface APIResponse {
  success :  boolean,
  data : any

}

@Component({
  selector: 'app-updatesub',
  templateUrl: './updatesub.component.html',
  styleUrls: ['./updatesub.component.css']
})
export class UpdatesubComponent implements OnInit {

  displayedColumns: string[] = ['subjectname', 'classname', 'teachername','action'];
  dataSource = new MatTableDataSource();


  constructor(
    private subjectServices : SubjectServices,
    private snackBar : MatSnackBar

  ) { }

  ngOnInit() :void{
 
    this.findSubjects();
    
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  findSubjects(){
    this.subjectServices.findSubjects().subscribe((res: any) => {
      this.dataSource = res.data;
    }, err => {
      console.log(err.message);
    });
  }

  DeleteSubject(id:String){
    this.subjectServices.DeleteSubject(id).subscribe(response => {
    console.log(response);
   this.snackBar.open('Subjects and teacher added successfully', null, { duration : 2000});
    }, err => {
    this.snackBar.open('Subject name and Class required', null, { duration : 3000});
      console.log(err.message);
  });
    
    
  }

}



