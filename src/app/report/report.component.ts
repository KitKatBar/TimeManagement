import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Doctor } from '../models/doctor';
import { Timecard } from '../models/timecard';
import { DoctorService } from '../services/doctor.service';
import { TimecardService } from '../services/timecard.service';
import { UrlService } from '../services/url.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
 
  public doctors: Doctor[] = [];
  public doctor: any;
  public errorMsg: any;
  public timecards: Timecard[] = [];

  constructor(private dataService: DoctorService, private timecardService: TimecardService) {}
  //constructor(private dataService: DoctorService, private fb: FormBuilder,
    //public taskForm: FormGroup, private router: Router) { }

  ngOnInit(): void {
    //this.taskForm = this.fb.group({
    //  startDate: ['', Validators.required],
    //  endDate: ['', Validators.required],
   // });
    this.dataService.getDoctors().subscribe(
      (data) => {this.doctors = data; console.log(data)},
      (err) => this.errorMsg = err,
      () => {this.loadData(this.doctors); console.log('Complete')}
    )

    /*this.timecardService.getTimecards().subscribe(
      (data) => {this.timecards = data; console.log(data)},
      (err) => this.errorMsg = err,
      () => console.log('Complete')
    )*/
  }

  loadData(doctors: any) {
    let indexDoctor: any;
    let indexTimecard: any;
    for (indexDoctor in doctors) {
      if (doctors[indexDoctor].timecard.length > 0) {
        for (indexTimecard in doctors[indexDoctor].timecard) {
          this.timecards.push(doctors[indexDoctor].timecard[indexTimecard]);
        }
        for (indexTimecard in this.timecards) {
          if (this.timecards[indexTimecard].doctor == null) {
            this.timecards[indexTimecard].doctor = doctors[indexDoctor];
          }
        }
      } 
    }
  }

  getDateforReport() {
   // let Date1 = this.taskForm.controls['startDate'].value;
  //  let Date2 = this.taskForm.controls['endDate'].value;

    //this.dataService.reportService(Date1, Date2).subscribe(
      //(resp) => { console.log(resp); this.router.navigateByUrl('/') },
      //(error) => { console.error(error) }
    //)
  }
}
