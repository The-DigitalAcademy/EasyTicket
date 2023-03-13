import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklypaymentsComponent } from './weeklypayments.component';

describe('WeeklypaymentsComponent', () => {
  let component: WeeklypaymentsComponent;
  let fixture: ComponentFixture<WeeklypaymentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeeklypaymentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeeklypaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
