import { TestBed, inject } from '@angular/core/testing';

import { VideoAuthenticationService } from './video-authentication.service';

describe('AccountAuthenticationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VideoAuthenticationService]
    });
  });

  it('should be created', inject([VideoAuthenticationService], (service: VideoAuthenticationService) => {
    expect(service).toBeTruthy();
  }));
});
