import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailstonsComponent } from './mailstons.component';

describe('MailstonsComponent', () => {
  let component: MailstonsComponent;
  let fixture: ComponentFixture<MailstonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MailstonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MailstonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
