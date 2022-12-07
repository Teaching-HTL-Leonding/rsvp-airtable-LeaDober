import { TestBed } from '@angular/core/testing';

import { AirtableAuthInterceptor } from './airtable-auth.interceptor';

describe('AirtableAuthInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      AirtableAuthInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: AirtableAuthInterceptor = TestBed.inject(AirtableAuthInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
