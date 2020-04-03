import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatesubComponent } from './updatesub.component';

describe('UpdatesubComponent', () => {
  let component: UpdatesubComponent;
  let fixture: ComponentFixture<UpdatesubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatesubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatesubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
