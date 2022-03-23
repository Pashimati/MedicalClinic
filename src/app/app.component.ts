import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from "@angular/router";
import {HttpService} from "./service/http.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [HttpService]
})
export class AppComponent {
  blackList: string [] = [
    '/authorization',
    '/registration',
  ];

  OnInit(){

  }

  isHideHeader: boolean = false;
  isHideFooter: boolean = false;

  constructor(
    private router: Router,
    private http: HttpService
  ) {


    // this.http.getDoctors()
    // this.http.deleteDoctors()
    // this.http.get('https://api-medical-clinic.herokuapp.com/doctor/get-all')


    this.isHideHeaderAndFooter()
  }


  private isHideHeaderAndFooter(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const currentUrl: string = this.router.url;

        if (this.blackList.includes(currentUrl)) {
          this.isHideFooter = true;
          this.isHideHeader = true;
        } else {
          this.isHideFooter = false;
          this.isHideHeader = false;
        }
      }
    })
  }
}


