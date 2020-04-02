import { Component, OnInit } from '@angular/core';
import { Validators} from '@angular/forms';
import { FeesService } from 'src/app/services/fees.service';
import { MatSnackBar } from '@angular/material';




interface APIResponse {
  success : boolean,
  data : any
}


@Component({
  selector: 'app-addfees',
  templateUrl: './addfees.component.html',
  styleUrls: ['./addfees.component.css']
})
export class AddfeesComponent implements OnInit {


    private grade : String;
    private termfee :Number;
    private facilityfee : Number;
    private librarycharges :Number;
    private laboratorycharges :Number;
    private transportationfee :Number ;
    private other :Number;



  constructor(
    private feesService: FeesService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {

    this.grade = '' , Validators.required;
    this.termfee = 0, Validators.required;
    this.facilityfee = 0, Validators.required;
    this.librarycharges = 0;
    this.laboratorycharges = 0;
    this.transportationfee = 0;
    this.other = 0;



  }


  createNewFee() {
    this.feesService.createNewFee(this.grade,this.termfee,this.facilityfee,this.librarycharges,this.laboratorycharges, this.transportationfee, this.other).subscribe(response => {
      console.log(response);
      this.snackBar.open('Added fees to database', null, { duration : 2000});
    }, err => {
      this.snackBar.open('Please fill required fields', null, { duration : 3000});
      console.log(err.message);
    });
    this.clear();
  }

  clear() {
    this.termfee =0 ;
    this.facilityfee = 0;
    this.librarycharges = 0;
    this.laboratorycharges = 0;
    this.transportationfee = 0;
    this.other = 0;

  }

}


