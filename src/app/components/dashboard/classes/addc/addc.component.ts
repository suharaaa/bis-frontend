import { Component, OnInit } from '@angular/core';
import { ClassServices } from 'src/app/services/classes.service';
import {  MatSnackBar } from '@angular/material';

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
  private classteacher: String;
 


  constructor(

    private classService: ClassServices,
   private snackBar: MatSnackBar

  ) { }

  ngOnInit() : void {

    this.name ='';
    this.classteacher ='';
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