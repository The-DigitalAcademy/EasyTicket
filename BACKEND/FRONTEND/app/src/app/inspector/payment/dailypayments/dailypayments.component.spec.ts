import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailypaymentsComponent } from './dailypayments.component';

describe('DailypaymentsComponent', () => {
  let component: DailypaymentsComponent;
  let fixture: ComponentFixture<DailypaymentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailypaymentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DailypaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
