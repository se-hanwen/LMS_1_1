import { TestBed } from '@angular/core/testing';

import { LoginMessageHandlerService } from './login-message-handler.service';

describe('LoginMessageHandlerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoginMessageHandlerService = TestBed.get(LoginMessageHandlerService);
    expect(service).toBeTruthy();
  });
});
