import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriePageComponent } from './serie-page.component';

describe('SeriePageComponent', () => {
  let component: SeriePageComponent;
  let fixture: ComponentFixture<SeriePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeriePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeriePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
