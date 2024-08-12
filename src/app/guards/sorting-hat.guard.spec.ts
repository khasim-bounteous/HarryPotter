import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { sortingHatGuard } from './sorting-hat.guard';

describe('sortingHatGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => sortingHatGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
