import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScanTripComponent } from './scan-trip.component';

describe('ScanTripComponent', () => {
  let component: ScanTripComponent;
  let fixture: ComponentFixture<ScanTripComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScanTripComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScanTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
