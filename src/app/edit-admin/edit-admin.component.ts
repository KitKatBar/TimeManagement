import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-edit-admin',
  templateUrl: './edit-admin.component.html',
  styleUrls: ['./edit-admin.component.css']
})
export class EditAdminComponent implements OnInit {

  public adminId: any;
  public admin: any;
  public errorMsg: any;
  public admins: any;
  
  constructor(private dataService: AdminService, private actRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.actRoute.paramMap.subscribe((params: ParamMap) => {
      let id = params.get('id');
      console.log(id)
      this.adminId = id;
      console.log(this.adminId);
    });
    this.admin = this.dataService.getAdminById(this.adminId).subscribe(
      (data) => {this.admin = data; console.log(data);},
      (error) => {this.errorMsg = error; console.log(error); }
    );
  }

  update(employeeId: any, employee: any){
    console.log(this.admin);
    console.log(this.adminId);
    this.dataService.updateAdmin(this.adminId, this.admin).subscribe(
      (data) => {this.admin = data; console.log(data);
        this.dataService.getAdmins().subscribe(
          (data) => this.admins = data,
          (error) => this.errorMsg = error
        )
      },
      (error) => {this.errorMsg = error; console.log(error); }
    );
    this.router.navigate(['/administration/admin-list']);
  }

}
