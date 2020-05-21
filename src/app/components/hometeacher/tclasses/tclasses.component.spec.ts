import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TclassesComponent } from './tclasses.component';

describe('TclassesComponent', () => {
  let component: TclassesComponent;
  let fixture: ComponentFixture<TclassesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TclassesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TclassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
