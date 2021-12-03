import { TestBed } from '@angular/core/testing';

import { CinefiloService } from './cinefilo.service';

describe('CinefiloService', () => {
  let service: CinefiloService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CinefiloService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
