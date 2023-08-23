import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { DoctorService } from '../services/doctor.service';

@Component({
  selector: 'app-edit-doctor',
  templateUrl: './edit-doctor.component.html',
  styleUrls: ['./edit-doctor.component.css']
})
export class EditDoctorComponent implements OnInit {

  public doctorId: any;
  public doctor: any;
  public errorMsg: any;
  public doctors: any;
  
  constructor(private dataService: DoctorService, private actRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.actRoute.paramMap.subscribe((params: ParamMap) => {
      let id = params.get('id');
      console.log(id)
      this.doctorId = id;
      console.log(this.doctorId);
    });
    this.doctor = this.dataService.getDoctorById(this.doctorId).subscribe(
      (data) => {this.doctor = data; console.log(data);},
      (error) => {this.errorMsg = error; console.log(error); }
    );
  }

  update(employeeId: any, employee: any){
    console.log(this.doctor);
    console.log(this.doctorId);
    this.dataService.updateDoctor(this.doctorId, this.doctor).subscribe(
      (data) => {this.doctor = data; console.log(data);
        this.dataService.getDoctors().subscribe(
          (data) => this.doctors = data,
          (error) => this.errorMsg = error
        )
      },
      (error) => {this.errorMsg = error; console.log(error); }
    );
    this.router.navigate(['/administration/doctor-list']);
  }

}
