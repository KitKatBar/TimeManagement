import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.css']
})
export class AdministrationComponent implements OnInit {

  constructor() { }

  opened = true;
  goodTopGap = 113;
  @ViewChild('sidenav', { static: true })
  sidenav!: MatSidenav;
  ngOnInit() {
    console.log(window.innerWidth)
    if (window.innerWidth < 768) {
      this.sidenav.fixedTopGap = this.goodTopGap;
      this.opened = false;
    }
    else {
      this.sidenav.fixedTopGap = this.goodTopGap;
      this.opened = true;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (event.target.innerWidth < 768) {
      this.sidenav.fixedTopGap = this.goodTopGap;
      this.opened = false;
    }
    else {
      this.sidenav.fixedTopGap = this.goodTopGap;
      this.opened = true;
    }
  }

  isBiggerScreen() {
    const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
    if (width < 768) {
      return true;
    }
    else {
      return false;
    }
  }

}
