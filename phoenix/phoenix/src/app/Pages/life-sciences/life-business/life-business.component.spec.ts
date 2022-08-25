import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeBusinessComponent } from './life-business.component';

describe('LifeBusinessComponent', () => {
  let component: LifeBusinessComponent;
  let fixture: ComponentFixture<LifeBusinessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifeBusinessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LifeBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
