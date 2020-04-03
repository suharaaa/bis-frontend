import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Validators, FormControl } from '@angular/forms';
// import { Router } from '@angular/router';
// import { MatSnackBar } from '@angular/material';


interface APIResponse {
  success : boolean,
  data : any
}




@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  [x: string]: any;

  // private mail: string;
  // private password: string;
  email = new FormControl('', [Validators.required, Validators.email]);
  hide = true;
  usersService: any;
  constructor() {
     // private router: Router,
    // private snackbar: MatSnackBar
   }

   getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  createNewUser(){
    this.usersService.createNewUser(this.fullname,this.email,this.grade,this.password,this.reenter).subscribe(response => {
      console.log(Response);
      this.snakBar.open('Added users to database',null);
    },err =>{
      this.snakBar.open('Please fill required feilds',null);

    });
    this.clear
  }

  

  ngOnInit() {
    
  }
  

}
