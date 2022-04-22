import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from "@angular/router";

import {NavigationService} from "./service/navigation.service";

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
    '/sasas'
  ];


  ngOnInit() {
  }


  isHideHeader: boolean = false;
  isHideFooter: boolean = false;

  constructor
  (
    private router: Router,
  ) {
    this.isHideHeaderAndFooter()
  }


  private isHideHeaderAndFooter(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        ///
        const currentUrl = this.router.url;
        const urlContainsAdmin = currentUrl.includes('admin');
        const role = localStorage.getItem('role');
        if (urlContainsAdmin && role !== 'ADMIN') {
            this.router.navigateByUrl('404');
        }
        ///
        if (this.blackList.includes(currentUrl)
          || !this.isWhiteListContainsCurrentUrl(currentUrl)
        ) {
          this.isHideFooter = true;
          this.isHideHeader = true;
        } else {
          this.isHideFooter = false;
          this.isHideHeader = false;
        }
      }
    })
  }

  private isWhiteListContainsCurrentUrl( currentUrl:string ):boolean {
    let urlCurrentPage = currentUrl.replace('/', '');
    const whiteList = NavigationService.getRoutes();

    try {
      whiteList.forEach(({path}) => {
        if (path === urlCurrentPage) {
          throw true;
        }
      })
    } catch (e) {
      return true;
    }

    return false;
  }
}


