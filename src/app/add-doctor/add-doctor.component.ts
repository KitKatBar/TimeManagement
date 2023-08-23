import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from '../models/doctor';
import { Location } from '../models/location';
import { Role } from '../models/role';
import { Sector } from '../models/sector';
import { DoctorService } from '../services/doctor.service';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css']
})
export class AddDoctorComponent implements OnInit {

  public doctors: any;
  public errorMsg: any;

  constructor(private dataService: DoctorService, private router: Router) { }

  //public doctor = new Doctor("", "", 0, new Location(0, "", new Sector(0, "")), new Role(0, ""), "");
  public doctor: Doctor = <Doctor>{};

  ngOnInit(): void {
  }

  onSubmit(doctorForm: any) {
    console.log(this.doctor);
    this.dataService.postDoctor(this.doctor).subscribe(
      (data) => {this.doctors = data;
        this.dataService.getDoctors().subscribe(
          (data) => this.doctors = data,
          (err) => this.errorMsg = err
        )
      },
      (err) => this.errorMsg = err
    );
    //this.dataService.doctors.push(this.doctor);
    this.router.navigate(['/administration/doctor-list']);
  }

}
