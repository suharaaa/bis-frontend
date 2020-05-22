import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintNComponent } from './print-n.component';

describe('PrintNComponent', () => {
  let component: PrintNComponent;
  let fixture: ComponentFixture<PrintNComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintNComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
