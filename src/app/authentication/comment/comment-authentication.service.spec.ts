import { TestBed, inject } from '@angular/core/testing';

import { CommentAuthenticationService } from './comment-authentication.service';

describe('CommentAuthenticationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommentAuthenticationService]
    });
  });

  it('should be created', inject([CommentAuthenticationService], (service: CommentAuthenticationService) => {
    expect(service).toBeTruthy();
  }));
});
