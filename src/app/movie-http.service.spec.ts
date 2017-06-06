import { TestBed, inject } from '@angular/core/testing';

import { MovieHTTPService } from './movie-http.service';

describe('MovieHTTPService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MovieHTTPService]
    });
  });

  it('should be created', inject([MovieHTTPService], (service: MovieHTTPService) => {
    expect(service).toBeTruthy();
  }));
});
