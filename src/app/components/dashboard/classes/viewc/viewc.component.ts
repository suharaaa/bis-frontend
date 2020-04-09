import { Component, OnInit } from '@angular/core';
import { ClassServices } from 'src/app/services/classes.service';
import {  MatSnackBar } from '@angular/material';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';

interface APIResponse {
  success :  boolean,
  data : any

}

@Component({
  selector: 'app-viewc',
  templateUrl: './viewc.component.html',
  styleUrls: ['./viewc.component.css']
})
export class ViewcComponent implements OnInit {

  displayedColumns: string[] = ['name', 'classteacher','action'];
  dataSource = new MatTableDataSource();

  
  private _id: String;
  private name: String;
  private classteacher: String;


  constructor(
    private classServices : ClassServices,
    private snackBar : MatSnackBar,
    private router : Router
  ) { }

  ngOnInit() :void{
    this.findClass();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  findClass(){
    this.classServices.findClass().subscribe((res: any) => {
      this.dataSource = res.data;
    }, err => {
      console.log(err.message);
    });
  }
  DeleteClass(id: String){
    this.classServices.DeleteClass(id).subscribe(response => {
      console.log(response);
      this.snackBar.open('Subject is successfully deleted', null, { duration : 2000});
    }, err => {
      this.snackBar.open('Subject could not be deleted', null, { duration : 3000});
      console.log(err.message);
    });
  }

}

