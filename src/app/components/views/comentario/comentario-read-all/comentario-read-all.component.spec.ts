import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComentarioReadAllComponent } from './comentario-read-all.component';

describe('ComentarioReadAllComponent', () => {
  let component: ComentarioReadAllComponent;
  let fixture: ComponentFixture<ComentarioReadAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComentarioReadAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComentarioReadAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
