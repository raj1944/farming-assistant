import { TestBed, async, inject } from '@angular/core/testing';

import { AuthlrGuard } from './authlr.guard';

describe('AuthlrGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthlrGuard]
    });
  });

  it('should ...', inject([AuthlrGuard], (guard: AuthlrGuard) => {
    expect(guard).toBeTruthy();
  }));
});
