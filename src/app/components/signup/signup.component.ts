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

  // private mail: string;
  // private password: string;
  email = new FormControl('', [Validators.required, Validators.email]);
  hide = true;
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

  ngOnInit() {
    
  }
  

}
