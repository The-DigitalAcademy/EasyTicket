import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlypaymentsComponent } from './monthlypayments.component';

describe('MonthlypaymentsComponent', () => {
  let component: MonthlypaymentsComponent;
  let fixture: ComponentFixture<MonthlypaymentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthlypaymentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonthlypaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
