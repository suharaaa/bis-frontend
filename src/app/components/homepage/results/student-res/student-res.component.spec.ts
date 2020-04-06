import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentResComponent } from './student-res.component';

describe('StudentResComponent', () => {
  let component: StudentResComponent;
  let fixture: ComponentFixture<StudentResComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentResComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentResComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
