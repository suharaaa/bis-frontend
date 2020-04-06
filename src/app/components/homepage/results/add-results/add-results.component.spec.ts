import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddResultsComponent } from './add-results.component';

describe('AddResultsComponent', () => {
  let component: AddResultsComponent;
  let fixture: ComponentFixture<AddResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
