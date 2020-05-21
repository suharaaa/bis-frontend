import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Report1Component } from './report1.component';

describe('Report1Component', () => {
  let component: Report1Component;
  let fixture: ComponentFixture<Report1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Report1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Report1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
