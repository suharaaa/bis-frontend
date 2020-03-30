import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTchAttnComponent } from './view-tch-attn.component';

describe('ViewTchAttnComponent', () => {
  let component: ViewTchAttnComponent;
  let fixture: ComponentFixture<ViewTchAttnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewTchAttnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTchAttnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
