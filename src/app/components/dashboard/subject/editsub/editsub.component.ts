import { Component, OnInit } from '@angular/core';
import { SubjectServices } from 'src/app/services/subject.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editsub',
  templateUrl: './editsub.component.html',
  styleUrls: ['./editsub.component.css']
})
export class EditsubComponent implements OnInit {

  
  public teachername: string;
  public assignIn: string;
  public isOnUpdate: boolean;
  public id: string;

  public classes;

  constructor(
    private subjectService: SubjectServices,
  //  private teacherService: TeacherServices,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

 /*   this.route.queryParams.subscribe(params => {
      if (params.id) {
        this.subjectService.findSubjectID(params.id).subscribe((res: { data: any }) => {
          this.id = params.id;
          this.teachername = res.data.teachername;
          this.assignIn = res.data.In._id;
          this.isOnUpdate = true;
        });
      }
    });
    this.findTeacher(); */
  
  }
/*
  public findTeacher() {
    this.teacherService.findTeacher().subscribe((res: { data: any }) => this.classes = res.data);
  }

  
  public saveSubject() {
    this.subjectService.createNewSubject(
      {
        
          this.teachername = res.data.teachername;
          this.assignIn = res.data.In._id
      }
    ).subscribe(res => {
      alert('created new subject');
    });
  }

  public UpdateSubject() {
    this.subjectService.UpdateSubject(
      this.id,
      {
        
          this.teachername = res.data.teachername;
          this.assignIn = res.data.In._id
      }
    ).subscribe(res => {
      alert('updated subject');
    });
  }*/

}

