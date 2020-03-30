import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateUnenrollComponent } from './update-unenroll.component';

describe('UpdateUnenrollComponent', () => {
  let component: UpdateUnenrollComponent;
  let fixture: ComponentFixture<UpdateUnenrollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateUnenrollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateUnenrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
