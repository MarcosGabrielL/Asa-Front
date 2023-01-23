import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAcaoSerieComponent } from './home-acao-serie.component';

describe('HomeAcaoSerieComponent', () => {
  let component: HomeAcaoSerieComponent;
  let fixture: ComponentFixture<HomeAcaoSerieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeAcaoSerieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeAcaoSerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
