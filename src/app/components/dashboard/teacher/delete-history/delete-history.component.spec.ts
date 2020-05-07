import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteHistoryComponent } from './delete-history.component';

describe('DeleteHistoryComponent', () => {
  let component: DeleteHistoryComponent;
  let fixture: ComponentFixture<DeleteHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
