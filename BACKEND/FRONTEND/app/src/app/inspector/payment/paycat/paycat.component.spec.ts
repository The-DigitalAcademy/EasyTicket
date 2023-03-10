import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaycatComponent } from './paycat.component';

describe('PaycatComponent', () => {
  let component: PaycatComponent;
  let fixture: ComponentFixture<PaycatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaycatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaycatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
