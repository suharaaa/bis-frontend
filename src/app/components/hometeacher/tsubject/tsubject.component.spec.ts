import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TsubjectComponent } from './tsubject.component';

describe('TsubjectComponent', () => {
  let component: TsubjectComponent;
  let fixture: ComponentFixture<TsubjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TsubjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TsubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
