import { TestBed } from '@angular/core/testing';

import { ClassServices } from './classes.service';

describe('ClasssServices', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClassServices = TestBed.get(ClassServices);
    expect(service).toBeTruthy();
  });
});