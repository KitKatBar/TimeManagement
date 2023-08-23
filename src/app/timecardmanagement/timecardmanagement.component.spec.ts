import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimecardmanagementComponent } from './timecardmanagement.component';

describe('TimecardmanagementComponent', () => {
  let component: TimecardmanagementComponent;
  let fixture: ComponentFixture<TimecardmanagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimecardmanagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimecardmanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
