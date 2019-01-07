import { TestBed } from '@angular/core/testing';

import { IntervalmodelService } from './intervalmodel.service';

describe('IntervalmodelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IntervalmodelService = TestBed.get(IntervalmodelService);
    expect(service).toBeTruthy();
  });
});
