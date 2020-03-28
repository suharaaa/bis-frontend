import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewNComponent } from './view-n.component';

describe('ViewNComponent', () => {
  let component: ViewNComponent;
  let fixture: ComponentFixture<ViewNComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewNComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
