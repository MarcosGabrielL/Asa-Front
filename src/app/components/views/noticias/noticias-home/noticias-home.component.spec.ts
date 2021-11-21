import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiasHomeComponent } from './noticias-home.component';

describe('NoticiasHomeComponent', () => {
  let component: NoticiasHomeComponent;
  let fixture: ComponentFixture<NoticiasHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoticiasHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticiasHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
