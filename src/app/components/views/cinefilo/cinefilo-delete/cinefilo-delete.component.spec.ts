import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CinefiloDeleteComponent } from './cinefilo-delete.component';

describe('CinefiloDeleteComponent', () => {
  let component: CinefiloDeleteComponent;
  let fixture: ComponentFixture<CinefiloDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CinefiloDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CinefiloDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
