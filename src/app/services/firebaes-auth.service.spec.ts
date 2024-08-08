import { TestBed } from '@angular/core/testing';

import { FirebaesAuthService } from './firebaes-auth.service';

describe('FirebaesAuthService', () => {
  let service: FirebaesAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirebaesAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
