import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportcatComponent } from './reportcat.component';

describe('ReportcatComponent', () => {
  let component: ReportcatComponent;
  let fixture: ComponentFixture<ReportcatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportcatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportcatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
