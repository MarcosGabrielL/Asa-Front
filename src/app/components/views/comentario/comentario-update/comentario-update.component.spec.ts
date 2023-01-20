import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComentarioUpdateComponent } from './comentario-update.component';

describe('ComentarioUpdateComponent', () => {
  let component: ComentarioUpdateComponent;
  let fixture: ComponentFixture<ComentarioUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComentarioUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComentarioUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
