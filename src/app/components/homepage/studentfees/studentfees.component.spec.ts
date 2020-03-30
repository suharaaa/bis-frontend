import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentfeesComponent } from './studentfees.component';

describe('StudentfeesComponent', () => {
  let component: StudentfeesComponent;
  let fixture: ComponentFixture<StudentfeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentfeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentfeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
