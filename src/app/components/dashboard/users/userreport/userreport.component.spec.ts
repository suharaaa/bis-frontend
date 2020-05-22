import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserreportComponent } from './userreport.component';

describe('UserreportComponent', () => {
  let component: UserreportComponent;
  let fixture: ComponentFixture<UserreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
