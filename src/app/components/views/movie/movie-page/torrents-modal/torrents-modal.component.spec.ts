import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TorrentsModalComponent } from './torrents-modal.component';

describe('TorrentsModalComponent', () => {
  let component: TorrentsModalComponent;
  let fixture: ComponentFixture<TorrentsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TorrentsModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TorrentsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
