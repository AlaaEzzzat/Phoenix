import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthcareOverviewComponent } from './healthcare-overview.component';

describe('HealthcareOverviewComponent', () => {
  let component: HealthcareOverviewComponent;
  let fixture: ComponentFixture<HealthcareOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealthcareOverviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HealthcareOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
