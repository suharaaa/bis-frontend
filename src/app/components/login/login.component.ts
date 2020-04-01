import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
// import { Router } from '@angular/router';
// import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // private mail: string;
  // private password: string;
  email = new FormControl('', [Validators.required, Validators.email]);
  hide = true;
  
  constructor(
    // private router: Router,
    // private snackbar: MatSnackBar
  ) { }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  ngOnInit() {
    // this.mail = '';
    // this.password = '';
  }

  // login() {
  //   if (this.mail === 'admin@lms.com' && this.password === 'pass') {
  //     this.router.navigate(['dashboard']);
  //   } else {
  //     this.snackbar.open('Please enter valid credentials', null, { duration: 2000 })
  //   }
  // }
}
