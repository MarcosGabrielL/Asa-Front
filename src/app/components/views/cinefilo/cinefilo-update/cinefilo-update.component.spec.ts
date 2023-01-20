import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CinefiloUpdateComponent } from './cinefilo-update.component';

describe('CinefiloUpdateComponent', () => {
  let component: CinefiloUpdateComponent;
  let fixture: ComponentFixture<CinefiloUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CinefiloUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CinefiloUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
