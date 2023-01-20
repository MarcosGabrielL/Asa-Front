import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CinefiloHomeComponent } from './cinefilo-home.component';

describe('CinefiloHomeComponent', () => {
  let component: CinefiloHomeComponent;
  let fixture: ComponentFixture<CinefiloHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CinefiloHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CinefiloHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
