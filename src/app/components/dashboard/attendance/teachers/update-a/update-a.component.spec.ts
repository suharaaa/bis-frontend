import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAComponent } from './update-a.component';

describe('UpdateAComponent', () => {
  let component: UpdateAComponent;
  let fixture: ComponentFixture<UpdateAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
