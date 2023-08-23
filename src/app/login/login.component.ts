import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../services/admin.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  invalidCredentialMsg: string | undefined;
  username: string | undefined;
  password: string | undefined;
  retUrl: string | null = "";

  constructor(private authService: AuthService, private adminService: AdminService, 
    private router: Router, 
    private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    // this.activatedRoute.queryParamMap
    //     .subscribe(params => {
    // this.retUrl = params.get('retUrl'); 
    // console.log( 'LoginComponent/ngOnInit '+ this.retUrl);
    // });
  }

  onFormSubmit(loginForm: any) {
    console.log(loginForm.value.username);
    console.log(loginForm.value.password);
    this.adminService.login(loginForm.value.username, loginForm.value.password).subscribe(data => {
    console.log(loginForm.value.username)
    console.log( 'return to '+ this.retUrl);
    if (this.retUrl!=null) {
        this.adminService.setLogin(true);
        this.router.navigate( [this.retUrl]);
    } else {
        this.adminService.setLogin(true);
        this.router.navigate(['']);
    }
    });
  }

}
