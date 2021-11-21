import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieBuscaComponent } from './movie-busca.component';

describe('MovieBuscaComponent', () => {
  let component: MovieBuscaComponent;
  let fixture: ComponentFixture<MovieBuscaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieBuscaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieBuscaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
