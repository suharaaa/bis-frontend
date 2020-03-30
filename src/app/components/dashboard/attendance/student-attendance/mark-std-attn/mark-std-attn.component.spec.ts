import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkStdAttnComponent } from './mark-std-attn.component';

describe('MarkStdAttnComponent', () => {
  let component: MarkStdAttnComponent;
  let fixture: ComponentFixture<MarkStdAttnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarkStdAttnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkStdAttnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
