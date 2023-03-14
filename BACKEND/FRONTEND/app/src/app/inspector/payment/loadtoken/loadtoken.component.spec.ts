import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadtokenComponent } from './loadtoken.component';

describe('LoadtokenComponent', () => {
  let component: LoadtokenComponent;
  let fixture: ComponentFixture<LoadtokenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadtokenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadtokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
