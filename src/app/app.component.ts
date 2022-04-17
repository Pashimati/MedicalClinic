import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from "@angular/router";
import {LoaderService} from "./service/loader.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [],
})
export class AppComponent {

  blackList: string [] = [
    '/authorization',
    '/registration',
  ];


  OnInit(){
    // если есть ключ с юидом пользователя
    // тогда флаг аутх тру
  }

  isHideHeader: boolean = false;
  isHideFooter: boolean = false;

  constructor
  (
    private router: Router
  ) {
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


