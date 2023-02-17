import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassengercategoryComponent } from './passengercategory.component';

describe('PassengercategoryComponent', () => {
  let component: PassengercategoryComponent;
  let fixture: ComponentFixture<PassengercategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassengercategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PassengercategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
