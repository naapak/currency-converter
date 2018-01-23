import { TestBed, inject } from '@angular/core/testing';

import { FixerioService } from './fixerio.service';

describe('FixerioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FixerioService]
    });
  });

  it('should be created', inject([FixerioService], (service: FixerioService) => {
    expect(service).toBeTruthy();
  }));
});
