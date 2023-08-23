import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTimecardComponent } from './view-timecard.component';

describe('ViewTimecardComponent', () => {
  let component: ViewTimecardComponent;
  let fixture: ComponentFixture<ViewTimecardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewTimecardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTimecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
