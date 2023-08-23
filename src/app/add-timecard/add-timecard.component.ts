import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Doctor } from '../models/doctor';
import { Punchinandout } from '../models/punchinandout';
import { Time } from '../models/time';
import { Timecard } from '../models/timecard';
import { DoctorService } from '../services/doctor.service';
import { TimecardService } from '../services/timecard.service';

@Component({
  selector: 'app-add-timecard',
  templateUrl: './add-timecard.component.html',
  styleUrls: ['./add-timecard.component.css']
})

export class AddTimecardComponent implements OnInit {
  
  public timecardForm: any;
  public errorMsg: any;
  public timecards:any;
  
  constructor(private timecardService: TimecardService, private doctorService: DoctorService,
    private actRoute: ActivatedRoute, private router: Router, private fb: FormBuilder) { }

  public doctor: any;
  public doctors: any;
  public doctorId: any;
  public timeIn: Time = <Time>{};
  public timeOut: Time = <Time>{};
  public timecard: Timecard = <Timecard>{};
    
  meridian = true;

  ngOnInit(): void {
    this.timecardForm = this.fb.group({
      //doctorId: ['', Validators.required],
      date: ['', Validators.required],
      startTime: [null, Validators.required],
      endTime: [null, Validators.required],
    });

    this.actRoute.paramMap.subscribe((params: ParamMap) => {
      let id = params.get('id');
      console.log(id)
      this.doctorId = id;
      console.log(this.doctorId);

      this.doctorService.getDoctorById(this.doctorId).subscribe(
        (data) => {this.doctor = data; console.log(data)},
        (err) => this.errorMsg = err
      )
    });
  }

  toggleMeridian() {
      this.meridian = !this.meridian;
  }

  onSubmit() {
    this.timeIn = this.timecardForm.get("startTime").value;
    this.timeOut = this.timecardForm.get("endTime").value;
    //console.log(this.timecardForm.get("take1").value);
    console.log(this.doctors);
    console.log(this.timeIn);
    console.log(this.timeOut);

    console.log(this.timecardForm.get("date").value);
    this.timecard.date = this.timecardForm.get("date").value;
    console.log(this.timecard.date);
    
    //this.timecard.hours = 0;
    //this.doctorId = this.timecardForm.get("doctorId").value;
    //this.doctor = this.doctorService.getDoctorById(this.doctorId);
    console.log(this.doctor);

    //this.doctor.id = this.doctorId;
    this.timecard.doctor = this.doctor;
    console.log(this.timecard.doctor.id);

    this.timecard.time = new Array();
    this.timecard.time[0] = this.timeIn;
    this.timecard.time[1] = this.timeOut;
    this.timecard.hours = this.timecard.time[1].hour - this.timecard.time[0].hour;
    console.log(this.timecard.time);
    console.log(this.timecard);

    this.timecardService.postTimecard(this.timecard).subscribe(
      (data) => {this.timecards = data;
        //this.timecardService.getTimecards().subscribe(
          //(data) => this.doctors = data,
          //(err) => this.errorMsg = err
        //)
      },
      (err) => this.errorMsg = err
    );

    this.router.navigate(['/timecardmanagement/view-timecard-select']);
  }
}
