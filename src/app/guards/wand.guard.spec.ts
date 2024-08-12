import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { wandGuard } from './wand.guard';

describe('wandGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => wandGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
