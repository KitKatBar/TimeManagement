import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Punchinandout } from '../models/punchinandout';
import { Timecard } from '../models/timecard';
import { DoctorService } from '../services/doctor.service';
import { TimecardService } from '../services/timecard.service';
@Component({
  selector: 'app-view-timecard',
  templateUrl: './view-timecard.component.html',
  styleUrls: ['./view-timecard.component.css']
})
export class ViewTimecardComponent implements OnInit {
  
  public timecards: Timecard[] = [];
  public timecard: any;
  public errorMsg: any;
  public doctor: any;
  public doctors: any;
  public doctorId: any;

  constructor(private timecardService: TimecardService, private actRoute: ActivatedRoute, 
    private router: Router, private dataService: DoctorService) { }

  ngOnInit(): void {
    this.actRoute.paramMap.subscribe((params: ParamMap) => {
      let id = params.get('id');
      console.log(id)
      this.doctorId = id;
      console.log(this.doctorId);

      this.dataService.getDoctorById(this.doctorId).subscribe(
        (data) => {this.doctor = data; console.log(data)},
        (err) => this.errorMsg = err
      )

      //this.timecards = this.doctor.timecard;
      //console.log(this.timecards);
    });

    //this.timecards = this.doctor.timecard;
    this.timecardService.getTimecards().subscribe(
      (data) => {this.timecards = data; console.log(data)},
      (err) => this.errorMsg = err,
      () => console.log('Complete')
    )
  }

  editTimecard(timecard: any) {
    this.router.navigate(['/timecardmanagement/edit-timecard', timecard.id]);
  }
  
  deleteTimecard(timecard: any) {
    console.log(timecard);
    this.timecardService.deleteTimecard(timecard.id).subscribe(() => {
      this.timecardService.getTimecards().subscribe(
        (data) => this.timecards = data,
        (err) => this.errorMsg = err,
        () => console.log('Deleted')
      )
    })
  }

}
