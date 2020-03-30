import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkTchAttnComponent } from './mark-tch-attn.component';

describe('MarkTchAttnComponent', () => {
  let component: MarkTchAttnComponent;
  let fixture: ComponentFixture<MarkTchAttnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarkTchAttnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkTchAttnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
