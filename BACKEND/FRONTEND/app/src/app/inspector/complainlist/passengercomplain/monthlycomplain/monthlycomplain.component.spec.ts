import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlycomplainComponent } from './monthlycomplain.component';

describe('MonthlycomplainComponent', () => {
  let component: MonthlycomplainComponent;
  let fixture: ComponentFixture<MonthlycomplainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthlycomplainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonthlycomplainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
