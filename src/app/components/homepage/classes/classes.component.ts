
import { Component, OnInit } from '@angular/core';
import { ClassServices } from 'src/app/services/classes.service';
import {  MatSnackBar } from '@angular/material';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';

/*interface APIResponse {
  success :  boolean,
  data : any

}*/
@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']

})
export class ClasseshomeComponent implements OnInit {

  displayedColumns: string[] = ['name', 'classteacher','action'];
  dataSource : MatTableDataSource<any>;
  //dataSource = new MatTableDataSource();

  
 /* private _id: String;
  private name: String;
  private classteacher: String;*/


  constructor(
    private classServices : ClassServices,
    private snackBar : MatSnackBar,
    private router : Router
  ) { }

  ngOnInit() {

    this.findClass();
  }

  /*applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }*/
  applyFilter(keyword) {
    this.dataSource.filter = keyword.trim().toLowerCase();
  }
  findClass(){
    this.classServices.findClass().subscribe((res: any) => {
      this.dataSource = new MatTableDataSource (res.data);
    }, err => {
      console.log(err.message);
    });
  }


  public UpdateClass(id: string) {
    this.router.navigate(['dashboard/classes/addc'], { queryParams: { id } });
  }

  DeleteClass(id: String){
    this.classServices.DeleteClass(id).subscribe(response => {
      console.log(response);
      this.snackBar.open('class is successfully deleted', null, { duration : 2000});
    }, err => {
      this.snackBar.open('class could not be deleted', null, { duration : 3000});
      console.log(err.message);
    });
  }

}

