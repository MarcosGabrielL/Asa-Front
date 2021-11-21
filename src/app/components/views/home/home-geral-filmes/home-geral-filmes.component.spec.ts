import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeGeralFilmesComponent } from './home-geral-filmes.component';

describe('HomeGeralFilmesComponent', () => {
  let component: HomeGeralFilmesComponent;
  let fixture: ComponentFixture<HomeGeralFilmesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeGeralFilmesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeGeralFilmesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
