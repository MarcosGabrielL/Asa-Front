import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComentarioDeleteComponent } from './comentario-delete.component';

describe('ComentarioDeleteComponent', () => {
  let component: ComentarioDeleteComponent;
  let fixture: ComponentFixture<ComentarioDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComentarioDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComentarioDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
