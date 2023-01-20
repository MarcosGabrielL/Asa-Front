import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComentarioCreateComponent } from './comentario-create.component';

describe('ComentarioCreateComponent', () => {
  let component: ComentarioCreateComponent;
  let fixture: ComponentFixture<ComentarioCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComentarioCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComentarioCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
