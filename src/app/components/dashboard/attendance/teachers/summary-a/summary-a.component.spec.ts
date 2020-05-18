import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryAComponent } from './summary-a.component';

describe('SummaryAComponent', () => {
  let component: SummaryAComponent;
  let fixture: ComponentFixture<SummaryAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummaryAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
