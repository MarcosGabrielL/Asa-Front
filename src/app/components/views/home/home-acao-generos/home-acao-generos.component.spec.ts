import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAcaoGenerosComponent } from './home-acao-generos.component';

describe('HomeAcaoGenerosComponent', () => {
  let component: HomeAcaoGenerosComponent;
  let fixture: ComponentFixture<HomeAcaoGenerosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeAcaoGenerosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeAcaoGenerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
