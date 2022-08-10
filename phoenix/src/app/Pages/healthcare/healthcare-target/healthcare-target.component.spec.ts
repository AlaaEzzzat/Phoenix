import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthcareTargetComponent } from './healthcare-target.component';

describe('HealthcareTargetComponent', () => {
  let component: HealthcareTargetComponent;
  let fixture: ComponentFixture<HealthcareTargetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealthcareTargetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HealthcareTargetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
