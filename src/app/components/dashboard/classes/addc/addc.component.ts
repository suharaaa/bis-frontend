import { Component, OnInit } from '@angular/core';
import { ClassServices } from 'src/app/services/classes.service';
import {  MatSnackBar } from '@angular/material';
import { TeacherService } from 'src/app/services/teacher.service';

interface APIResponse {
  success : boolean,
  data : any
} 

@Component({
  selector: 'app-addc',
  templateUrl: './addc.component.html',
  styleUrls: ['./addc.component.css']
})



export class AddcComponent implements OnInit {

  private name: String;
  private classteacher: any;
 
public teachers: [];

  constructor(

    private classService: ClassServices,
   private snackBar: MatSnackBar,
   public teacherService: TeacherService

  ) { }

  ngOnInit() : void {

    this.name ='';
    this.classteacher ='';

  
  
this.viewTeacher();

  }

  public viewTeacher() {
    this.teacherService.viewTeacher().subscribe((res: { data: any }) => this.teachers = res.data);
  }


  createNewClass(){
    this.classService.createNewClass(this.name,this.classteacher).subscribe(response => {
    console.log(response);
   this.snackBar.open('Class and Class Teacher added successfully', null, { duration : 2000});
    }, err => {
    this.snackBar.open('Class and Class Teacher required', null, { duration : 3000});
      console.log(err.message);
  });
    this.clear();
    
    
  }

  clear() {
    this.name = '';
    this.classteacher = '';
    

}
  }