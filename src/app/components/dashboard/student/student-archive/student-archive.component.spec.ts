import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentArchiveComponent } from './student-archive.component';

describe('StudentArchiveComponent', () => {
  let component: StudentArchiveComponent;
  let fixture: ComponentFixture<StudentArchiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentArchiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentArchiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
