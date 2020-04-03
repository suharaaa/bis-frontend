import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditsubComponent } from './editsub.component';

describe('EditsubComponent', () => {
  let component: EditsubComponent;
  let fixture: ComponentFixture<EditsubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditsubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditsubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
