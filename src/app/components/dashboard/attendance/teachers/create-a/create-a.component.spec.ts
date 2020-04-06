import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAComponent } from './create-a.component';

describe('CreateAComponent', () => {
  let component: CreateAComponent;
  let fixture: ComponentFixture<CreateAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
