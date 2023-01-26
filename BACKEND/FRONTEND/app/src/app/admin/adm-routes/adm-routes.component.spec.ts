import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmRoutesComponent } from './adm-routes.component';

describe('AdmRoutesComponent', () => {
  let component: AdmRoutesComponent;
  let fixture: ComponentFixture<AdmRoutesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmRoutesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmRoutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
