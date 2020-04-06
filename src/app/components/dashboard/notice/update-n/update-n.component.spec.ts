import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateNComponent } from './update-n.component';

describe('UpdateNComponent', () => {
  let component: UpdateNComponent;
  let fixture: ComponentFixture<UpdateNComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateNComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
