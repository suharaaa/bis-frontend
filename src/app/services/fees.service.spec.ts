import { TestBed } from '@angular/core/testing';

import { FeesService } from './fees.service';

describe('FeesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FeesService = TestBed.get(FeesService);
    expect(service).toBeTruthy();
  });
});
