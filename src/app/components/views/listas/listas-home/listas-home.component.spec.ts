import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListasHomeComponent } from './listas-home.component';

describe('ListasHomeComponent', () => {
  let component: ListasHomeComponent;
  let fixture: ComponentFixture<ListasHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListasHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListasHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
