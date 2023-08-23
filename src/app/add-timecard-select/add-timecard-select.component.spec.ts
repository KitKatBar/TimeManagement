import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTimecardSelectComponent } from './add-timecard-select.component';

describe('AddTimecardSelectComponent', () => {
  let component: AddTimecardSelectComponent;
  let fixture: ComponentFixture<AddTimecardSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTimecardSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTimecardSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
