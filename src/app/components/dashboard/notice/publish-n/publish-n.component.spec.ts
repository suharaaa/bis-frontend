import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishNComponent } from './publish-n.component';

describe('PublishNComponent', () => {
  let component: PublishNComponent;
  let fixture: ComponentFixture<PublishNComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublishNComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublishNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
