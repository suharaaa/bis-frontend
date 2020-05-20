import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {UsersService} from 'src/app/services/users.service'
import { Router } from '@angular/router';
import { HttpResponse } from '@angular/common/http';
// import { Router } from '@angular/router';
// import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-login', 
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  hide = true;

    constructor(private UsersService: UsersService, private router: Router) { }
      
    ngOnInit() {
    }
  
    onLoginButtonClicked(email: string, password: string) {
      this.UsersService.login(email, password).subscribe((res: HttpResponse<any>) => {
        if (res.status === 200) {
          // we have logged in successfully
          this.router.navigate(['/dashboard']);
        }
        console.log(res);
        
      });
    }
  
        getErrorMessage() {
          if (this.email.hasError('required')) {
            return 'You must enter a value';
      
    }
  
  }
}