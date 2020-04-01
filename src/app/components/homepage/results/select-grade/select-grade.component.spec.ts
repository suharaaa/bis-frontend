import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectGradeComponent } from './select-grade.component';

describe('SelectGradeComponent', () => {
  let component: SelectGradeComponent;
  let fixture: ComponentFixture<SelectGradeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectGradeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectGradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
