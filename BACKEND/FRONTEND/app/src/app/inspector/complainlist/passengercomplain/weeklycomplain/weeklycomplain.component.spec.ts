import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklycomplainComponent } from './weeklycomplain.component';

describe('WeeklycomplainComponent', () => {
  let component: WeeklycomplainComponent;
  let fixture: ComponentFixture<WeeklycomplainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeeklycomplainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeeklycomplainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
