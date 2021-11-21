import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAcaoFilmesComponent } from './home-acao-filmes.component';

describe('HomeAcaoFilmesComponent', () => {
  let component: HomeAcaoFilmesComponent;
  let fixture: ComponentFixture<HomeAcaoFilmesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeAcaoFilmesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeAcaoFilmesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
