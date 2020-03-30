import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTComponent } from './add-t.component';

describe('AddTComponent', () => {
  let component: AddTComponent;
  let fixture: ComponentFixture<AddTComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
