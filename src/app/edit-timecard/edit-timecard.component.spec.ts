import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTimecardComponent } from './edit-timecard.component';

describe('EditTimecardComponent', () => {
  let component: EditTimecardComponent;
  let fixture: ComponentFixture<EditTimecardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTimecardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTimecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
