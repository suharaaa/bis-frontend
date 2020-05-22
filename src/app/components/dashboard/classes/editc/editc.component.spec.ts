import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditcComponent } from './editc.component';

describe('EditcComponent', () => {
  let component: EditcComponent;
  let fixture: ComponentFixture<EditcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
