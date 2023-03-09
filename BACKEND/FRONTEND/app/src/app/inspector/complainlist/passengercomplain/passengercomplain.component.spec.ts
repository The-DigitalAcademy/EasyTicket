import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassengercomplainComponent } from './passengercomplain.component';

describe('PassengercomplainComponent', () => {
  let component: PassengercomplainComponent;
  let fixture: ComponentFixture<PassengercomplainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassengercomplainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PassengercomplainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
