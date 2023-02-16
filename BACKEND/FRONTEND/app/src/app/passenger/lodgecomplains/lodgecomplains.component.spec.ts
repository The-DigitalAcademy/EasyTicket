import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LodgecomplainsComponent } from './lodgecomplains.component';

describe('LodgecomplainsComponent', () => {
  let component: LodgecomplainsComponent;
  let fixture: ComponentFixture<LodgecomplainsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LodgecomplainsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LodgecomplainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
