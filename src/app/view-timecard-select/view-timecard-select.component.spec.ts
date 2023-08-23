import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTimecardSelectComponent } from './view-timecard-select.component';

describe('ViewTimecardSelectComponent', () => {
  let component: ViewTimecardSelectComponent;
  let fixture: ComponentFixture<ViewTimecardSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewTimecardSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTimecardSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
