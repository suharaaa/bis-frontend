import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletesubComponent } from './deletesub.component';

describe('DeletesubComponent', () => {
  let component: DeletesubComponent;
  let fixture: ComponentFixture<DeletesubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletesubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletesubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
