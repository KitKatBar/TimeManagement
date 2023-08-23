import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../models/admin';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent implements OnInit {

  public admins: any;
  public errorMsg: any;

  constructor(private dataService: AdminService, private router: Router) { }

  public admin: Admin = <Admin>{};

  ngOnInit(): void {
  }

  onSubmit(adminForm: any) {
    console.log(this.admin);
    this.dataService.postAdmin(this.admin).subscribe(
      (data) => {this.admins = data;
        this.dataService.getAdmins().subscribe(
          (data) => this.admins = data,
          (err) => this.errorMsg = err
        )
      },
      (err) => this.errorMsg = err
    );
    //this.dataService.doctors.push(this.doctor);
    this.router.navigate(['/administration/admin-list']);
  }

}
