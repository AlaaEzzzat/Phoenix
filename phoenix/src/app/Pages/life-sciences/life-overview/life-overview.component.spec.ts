import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeOverviewComponent } from './life-overview.component';

describe('LifeOverviewComponent', () => {
  let component: LifeOverviewComponent;
  let fixture: ComponentFixture<LifeOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifeOverviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LifeOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
