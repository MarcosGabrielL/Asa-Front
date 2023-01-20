import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistasHomeComponent } from './artistas-home.component';

describe('ArtistasHomeComponent', () => {
  let component: ArtistasHomeComponent;
  let fixture: ComponentFixture<ArtistasHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtistasHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistasHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
