import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdsHorizontalComponent } from './ads-horizontal.component';

describe('AdsHorizontalComponent', () => {
  let component: AdsHorizontalComponent;
  let fixture: ComponentFixture<AdsHorizontalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdsHorizontalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdsHorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
