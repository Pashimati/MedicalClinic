import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from "@angular/router";
import { Emitters } from "./emitters/emitters";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [],
})
export class AppComponent implements OnInit{

  blackList: string [] = [
    '/authorization',
    '/registration',
  ];


  ngOnInit() {
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


