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


@Injectable()
export class MyService {
    myMethod$: Observable<any>;
    private myMethodSubject = new Subject<any>();

    constructor() {
        this.myMethod$ = this.myMethodSubject.asObservable();
    }

    myMethod(data) {
        console.log(data); // I have data! Let's return it so subscribers can use it!
        // we can do stuff with data if we want
        this.myMethodSubject.next(data);
    }
}
