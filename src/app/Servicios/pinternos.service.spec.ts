import { TestBed } from '@angular/core/testing';

import { PInternosService } from './pinternos.service';

describe('PInternosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PInternosService = TestBed.get(PInternosService);
    expect(service).toBeTruthy();
  });
});
