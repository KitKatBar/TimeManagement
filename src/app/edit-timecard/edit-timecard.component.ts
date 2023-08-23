import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { TimecardService } from '../services/timecard.service';
@Component({
  selector: 'app-edit-timecard',
  templateUrl: './edit-timecard.component.html',
  styleUrls: ['./edit-timecard.component.css']
})
export class EditTimecardComponent implements OnInit {
  timecardId: any;
public punchinandout:any;
public punchinandouts:any;
  errorMsg: any;
  
  constructor(private ticardserv: TimecardService, private actRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {

    this.actRoute.paramMap.subscribe((params: ParamMap) => {
      let id = params.get('id');
      console.log(id)
      this.timecardId = id;
      console.log(this.timecardId);
    });
    this.punchinandout= this.ticardserv.getTimecardById(this.timecardId).subscribe(
      (data) => {this.punchinandout = data; console.log(data);},
      (error) => {this.errorMsg = error; console.log(error); }
    );
    

  }
  meridian = true;

  toggleMeridian() {
      this.meridian = !this.meridian;
  }
  update(employeeId: any, employee: any) {
    console.log(this.punchinandout);
    console.log(this.timecardId);
    this.ticardserv.updateTimecard(this.timecardId, this.punchinandout).subscribe(
      (data) => {this.punchinandout = data; console.log(data);
        this.ticardserv.getTimecards().subscribe(
          (data) => this.punchinandouts= data,
          (error) => this.errorMsg = error
        )
      },
      (error) => {this.errorMsg = error; console.log(error); }
    );
    this.router.navigate(['/administration/view-timecard']);
  }













}
