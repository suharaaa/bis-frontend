import { Component, OnInit } from '@angular/core';
import { ErrorStateMatcher, MatSnackBar } from '@angular/material';
import { Validators, FormControl } from '@angular/forms';

//import { Router } from '@angular/router';


import { UsersService } from 'src/app/services/users.service';
import { StudentErrorStateMatcher } from 'src/app/helpers/student-error-state-matcher';






@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  [x: string]: any;

  private fullname: FormControl;
  private grade: FormControl;
  private matcher: StudentErrorStateMatcher;
  private password: FormControl;
  private reenter: FormControl;
  // private mail: string;
  // private password: string;
  email = new FormControl('', [Validators.required, Validators.email]);
  hide = true;
  //usersService: any;
  constructor(
    // private router: Router,
    private snackBar: MatSnackBar,
    private UsersService: UsersService
  ) { }


  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  
  ngOnInit() {
    this.matcher = new StudentErrorStateMatcher();
    this.fullname = new FormControl('', [Validators.required]);
    this.grade = new FormControl('', [Validators.required]);
    this.email = new FormControl('', [Validators.required]);
    this.password = new FormControl('', [Validators.required]);
    this.reenter = new FormControl('', [Validators.required]);

  }

  public get StudentErrorStateMatcher(): ErrorStateMatcher {
    return this.matcher;
  }

  public get Fullname(): FormControl {
    return this.fullname;
  }

  public get Grade(): FormControl {
    return this.grade;
  }

  public get Email(): FormControl {
    return this.email;
  }
  public get Password(): FormControl {
    return this.password;
  }
  public get Reenter(): FormControl {
    return this.reenter;
  }

  createNewUser() {
    this.UsersService.createNewUser(this.fullname.value , this.email.value, this.grade.value, this.password.value, this.reenter.value).subscribe(response => {
      console.log(response);
      this.snackBar.open('Added users to database', null, { duration: 2000 });
    }, err => {
      this.snackBar.open('Password should be larger than 8 characters!', null, { duration: 2000 });

    });

  }

}
