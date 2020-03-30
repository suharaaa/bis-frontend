import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-t',
  templateUrl: './add-t.component.html',
  styleUrls: ['./add-t.component.css']
})
export class AddTComponent implements OnInit {
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
