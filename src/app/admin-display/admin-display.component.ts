import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-admin-display',
  templateUrl: './admin-display.component.html',
  styleUrls: ['./admin-display.component.css']
})
export class AdminDisplayComponent implements OnInit {

  public admins: any;
  public errorMsg: any;

  constructor(private dataService: AdminService, private router: Router) { }

  ngOnInit(): void {
    //this.doctors = this.dataService.doctors;
    this.dataService.getAdmins().subscribe(
      (data) => {this.admins = data; console.log(data)},
      (err) => this.errorMsg = err,
      () => console.log('Complete')
    )
  }

  editAdmin(admin: any) {
    //this.router.navigate(['/administration/edit-doctor']);
    this.router.navigate(['/administration/edit-admin', admin.id]);
  }

  deleteAdmin(admin: any) {
    console.log(admin);
    this.dataService.deleteAdmin(admin.id).subscribe(() => {
      this.dataService.getAdmins().subscribe(
        (data) => this.admins = data,
        (err) => this.errorMsg = err,
        () => console.log('Deleted')
      )
    })
  }
}
