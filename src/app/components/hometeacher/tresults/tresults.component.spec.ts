import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TresultsComponent } from './tresults.component';

describe('TresultsComponent', () => {
  let component: TresultsComponent;
  let fixture: ComponentFixture<TresultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TresultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TresultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
