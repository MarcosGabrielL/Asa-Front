import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComentarioReadComponent } from './comentario-read.component';

describe('ComentarioReadComponent', () => {
  let component: ComentarioReadComponent;
  let fixture: ComponentFixture<ComentarioReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComentarioReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComentarioReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
