import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TnoticeboardComponent } from './tnoticeboard.component';

describe('TnoticeboardComponent', () => {
  let component: TnoticeboardComponent;
  let fixture: ComponentFixture<TnoticeboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TnoticeboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TnoticeboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
