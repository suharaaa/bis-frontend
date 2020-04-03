import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcComponent } from './viewc.component';

describe('ViewcComponent', () => {
  let component: ViewcComponent;
  let fixture: ComponentFixture<ViewcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
