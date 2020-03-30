import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageTComponent } from './manage-t.component';

describe('ManageTComponent', () => {
  let component: ManageTComponent;
  let fixture: ComponentFixture<ManageTComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageTComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
