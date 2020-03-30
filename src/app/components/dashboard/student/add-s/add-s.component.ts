import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-s',
  templateUrl: './add-s.component.html',
  styleUrls: ['./add-s.component.css']
})
export class AddSComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  
  constructor() { }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  
  ngOnInit() {
  }

}
