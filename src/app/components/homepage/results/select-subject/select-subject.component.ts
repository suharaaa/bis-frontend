import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-subject',
  templateUrl: './select-subject.component.html',
  styleUrls: ['./select-subject.component.css']
})
export class SelectSubjectComponent implements OnInit {

  constructor(
    private router: Router // 
  )
 
  { }

  ngOnInit() {
  }

  results(){
    this.router.navigate(["homepage/addResults"]);
  }

}