import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from '../models/doctor';
import { DoctorService } from '../services/doctor.service';

@Component({
  selector: 'app-view-timecard-select',
  templateUrl: './view-timecard-select.component.html',
  styleUrls: ['./view-timecard-select.component.css']
})
export class ViewTimecardSelectComponent implements OnInit {

  public doctors: Doctor[] = [];
  public doctor: any;
  public errorMsg: any;

  constructor(private dataService: DoctorService, private router: Router) { }

  ngOnInit(): void {
    this.dataService.getDoctors().subscribe(
      (data) => {this.doctors = data; console.log(data)},
      (err) => this.errorMsg = err,
      () => console.log('Complete')
    )
  }

  viewTimecard(doctor: any) {
    //this.router.navigate(['/administration/edit-doctor']);
    this.router.navigate(['/timecardmanagement/view-timecard', doctor.id]);
  }
}
