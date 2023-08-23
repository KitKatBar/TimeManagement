import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from '../models/doctor';
import { DoctorService } from '../services/doctor.service';

@Component({
  selector: 'app-add-timecard-select',
  templateUrl: './add-timecard-select.component.html',
  styleUrls: ['./add-timecard-select.component.css']
})
export class AddTimecardSelectComponent implements OnInit {

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

  addTimecard(doctor: any) {
    //this.router.navigate(['/administration/edit-doctor']);
    this.router.navigate(['/timecardmanagement/add-timecard', doctor.id]);
  }
}
