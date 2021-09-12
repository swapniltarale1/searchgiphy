import { TestBed } from '@angular/core/testing';

import { GiphyserviceService } from './giphyservice.service';

describe('GiphyserviceService', () => {
  let service: GiphyserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GiphyserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
