import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectSubjectComponent } from './select-subject.component';

describe('SelectSubjectComponent', () => {
  let component: SelectSubjectComponent;
  let fixture: ComponentFixture<SelectSubjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectSubjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
