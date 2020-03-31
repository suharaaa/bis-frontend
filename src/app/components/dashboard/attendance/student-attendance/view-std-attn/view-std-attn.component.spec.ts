import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewStdAttnComponent } from './view-std-attn.component';

describe('ViewStdAttnComponent', () => {
  let component: ViewStdAttnComponent;
  let fixture: ComponentFixture<ViewStdAttnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewStdAttnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewStdAttnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
