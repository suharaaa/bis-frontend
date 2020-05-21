import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HometeacherComponent } from './hometeacher.component';

describe('HometeacherComponent', () => {
  let component: HometeacherComponent;
  let fixture: ComponentFixture<HometeacherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HometeacherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HometeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
