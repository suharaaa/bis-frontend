import { Component, OnInit } from '@angular/core';
import { ClassServices } from 'src/app/services/classes.service';
import {  MatSnackBar } from '@angular/material';
import {MatTableDataSource} from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';

interface APIResponse {
  success :  boolean,
  data : any

}

@Component({
  selector: 'app-editc',
  templateUrl: './editc.component.html',
  styleUrls: ['./editc.component.css']
})
export class EditcComponent implements OnInit {

  displayedColumns: string[] = ['name', 'classteacher','action'];
  dataSource = new MatTableDataSource();

  
  private id: String;
  private name: String;
  private classteacher: String;
  public isOnUpdate: boolean;


  constructor(
    private classService : ClassServices,
    private snackBar : MatSnackBar,
   
    private route: ActivatedRoute,
  ) { }

  //ngOnInit() :void{
    //this.findClass();

    ngOnInit() {
      this.route.queryParams.subscribe(params => {
        if (params.id) {
          this.classService.findClassID(params.id).subscribe((res: { data: any }) => {
            this.id = params.id;
            this.name = res.data.name;
            this.classteacher=res.data.classteacher;
         
            this.isOnUpdate = true;
          });
        }
      });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  findClass(){
    this.classService.findClass().subscribe((res: any) => {
      this.dataSource = res.data;
    }, err => {
      console.log(err.message);
    });
  }
  
 


 /* DeleteClass(id: String){
    this.classServices.DeleteClass(id).subscribe(response => {
      console.log(response);
      this.snackBar.open('Subject is successfully deleted', null, { duration : 2000});
    }, err => {
      this.snackBar.open('Subject could not be deleted', null, { duration : 3000});
      console.log(err.message);
    });
  }*/

  public UpdateClass() {
    this.classService.UpdateClass(
      this.id,
      {
        name: this.name,
        classteacher: this.classteacher
        
      }
    ).subscribe(res => {
      alert('updated student');
    });

  }
  saveClass(){
    this.classService.createNewClass(this.name,this.classteacher).subscribe(response => {
    console.log(response);
   this.snackBar.open('Class and Class Teacher added successfully', null, { duration : 2000});
    }, err => {
    this.snackBar.open('Class and Class Teacher required', null, { duration : 3000});
      console.log(err.message);
  });
  }}