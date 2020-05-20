import { Component, OnInit } from '@angular/core';
import { FeesService } from 'src/app/services/fees.service';


interface APIResponse {
  success : boolean,
  data : any
}


@Component({
  selector: 'app-studentfees',
  templateUrl: './studentfees.component.html',
  styleUrls: ['./studentfees.component.css']
})
export class StudentfeesComponent implements OnInit {

    private _id: String;
    private grade : String;
    private termfee :Number;
    private facilityfee : Number;
    private librarycharges :Number;
    private laboratorycharges :Number;
    private transportationfee :Number ;
    private other :Number;
    private tot : Number;
    private fees :[];

  constructor(
    private feesService : FeesService
  ) { }

  ngOnInit() {

    this.grade = '' ;
    this.termfee = 0;
    this.facilityfee = 0;
    this.librarycharges = 0;
    this.laboratorycharges = 0;
    this.transportationfee = 0;
    this.other = 0;
    this.tot = 0;
    this.feesService.findFees().subscribe((response : APIResponse) => {
      this.fees = response.data;
    });
  }

}
