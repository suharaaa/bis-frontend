import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThomeComponent } from './thome.component';

describe('ThomeComponent', () => {
  let component: ThomeComponent;
  let fixture: ComponentFixture<ThomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
