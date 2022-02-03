import { TestBed } from '@angular/core/testing';

import { HomeGeralFilmesService } from './home-geral-filmes.service';

describe('HomeGeralFilmesService', () => {
  let service: HomeGeralFilmesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeGeralFilmesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});


