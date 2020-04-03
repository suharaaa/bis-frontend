import { Component, OnInit } from '@angular/core';
import { SubjectServices } from 'src/app/services/subject.service';
import { ClassServices } from 'src/app/services/classes.service';
import {  MatSnackBar } from '@angular/material';



interface APIResponse {
  success : boolean,
  data : any
}
@Component({
  selector: 'app-addsub',
  templateUrl: './addsub.component.html',
  styleUrls: ['./addsub.component.css']
})
export class AddsubComponent implements OnInit {

  
  private subjectname: String;
  private classname: any;
  private teachername: any;
 
 constructor(
   
   private subjectService: SubjectServices,
   private classService: ClassServices,

   private snackBar: MatSnackBar
   ) {}

      

   
  ngOnInit(): void {
    this.subjectname = '';
    this.classname = 0;
    this.teachername = '';

  }

  createNewSubject(){
    this.subjectService.createNewSubject(this.subjectname,this.classname,this.teachername).subscribe(response => {
    console.log(response);
   this.snackBar.open('Subjects and teacher added successfully', null, { duration : 2000});
    }, err => {
    this.snackBar.open('Subject name and Class required', null, { duration : 3000});
      console.log(err.message);
  });
    this.clear();
    
  }

  clear() {
    this.subjectname = '';
    this.classname = 0;
    this.teachername = '';
    

  }
  

  
}
