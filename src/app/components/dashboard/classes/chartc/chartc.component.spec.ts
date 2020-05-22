import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartcComponent } from './chartc.component';

describe('ChartcComponent', () => {
  let component: ChartcComponent;
  let fixture: ComponentFixture<ChartcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
