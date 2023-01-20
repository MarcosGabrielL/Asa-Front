import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CinefiloReadComponent } from './cinefilo-read.component';

describe('CinefiloReadComponent', () => {
  let component: CinefiloReadComponent;
  let fixture: ComponentFixture<CinefiloReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CinefiloReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CinefiloReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
