import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailycomplainComponent } from './dailycomplain.component';

describe('DailycomplainComponent', () => {
  let component: DailycomplainComponent;
  let fixture: ComponentFixture<DailycomplainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailycomplainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DailycomplainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
