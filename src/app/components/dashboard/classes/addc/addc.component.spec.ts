import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcComponent } from './addc.component';

describe('AddcComponent', () => {
  let component: AddcComponent;
  let fixture: ComponentFixture<AddcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
