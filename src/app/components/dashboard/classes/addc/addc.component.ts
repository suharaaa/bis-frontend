import { Component, OnInit } from '@angular/core';
import { ClassServices } from 'src/app/services/classes.service';
import {  MatSnackBar } from '@angular/material';
import { TeacherService } from 'src/app/services/teacher.service';
import { ActivatedRoute } from '@angular/router';

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
  private id: string;
  public isOnUpdate: boolean;
 
public teachers: [];

  constructor(

    private classService: ClassServices,
   private snackBar: MatSnackBar,
   public teacherService: TeacherService,
   private route: ActivatedRoute

  ) { }

  ngOnInit() : void {

    this.name ='';
    this.classteacher ='';

    
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
  
  
this.viewTeacher();

  }

  public viewTeacher() {
    this.teacherService.viewTeacher().subscribe((res: { data: any }) => this.teachers = res.data);
  }
 

  changeClass(){
    this.classService.UpdateClass(this.name,this.classteacher).subscribe(response => {
    console.log(response);
   this.snackBar.open('Class and Class Teacher added successfully', null, { duration : 2000});
    }, err => {
    this.snackBar.open('Class and Class Teacher required', null, { duration : 3000});
      console.log(err.message);
  });

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