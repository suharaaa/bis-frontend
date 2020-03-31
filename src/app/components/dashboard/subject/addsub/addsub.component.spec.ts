import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddsubComponent } from './addsub.component';

describe('AddsubComponent', () => {
  let component: AddsubComponent;
  let fixture: ComponentFixture<AddsubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddsubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddsubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
