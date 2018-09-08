import { TestBed, inject } from '@angular/core/testing';

import { AccountAuthenticationService } from './account-authentication.service';

describe('AccountAuthenticationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccountAuthenticationService]
    });
  });

  it('should be created', inject([AccountAuthenticationService], (service: AccountAuthenticationService) => {
    expect(service).toBeTruthy();
  }));
});
