import { TestBed, inject } from '@angular/core/testing';

import { LiveChatService } from './live-chat.service';

describe('LiveChatService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LiveChatService]
    });
  });

  it('should be created', inject([LiveChatService], (service: LiveChatService) => {
    expect(service).toBeTruthy();
  }));
});
