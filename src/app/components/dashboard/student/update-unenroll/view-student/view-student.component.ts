import { Component, OnInit } from "@angular/core";
import { StudentService } from "src/app/services/student.service";
import { ActivatedRoute } from "@angular/router";
import { ClassServices } from "src/app/services/classes.service";

@Component({
  selector: "app-view-student",
  templateUrl: "./view-student.component.html",
  styleUrls: ["./view-student.component.css"],
})
export class ViewStudentComponent implements OnInit {
  private id: string;
  public student;

  constructor(
    private studentService: StudentService,
    private classService: ClassServices,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.id = params.id;
      this.getStudent(this.id);
    });
  }

  getStudent(_id: string) {
    this.studentService.getStudentId(_id).subscribe(
      (res: any) => {
        this.student = res.data;
      },
      (err) => {
        console.log(err.message);
      }
    );
  }
}
