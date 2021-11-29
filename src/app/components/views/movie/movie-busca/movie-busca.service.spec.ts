import { TestBed } from '@angular/core/testing';

import { MovieBuscaService } from './movie-busca.service';

describe('MovieBuscaService', () => {
  let service: MovieBuscaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieBuscaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
