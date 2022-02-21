import { Component, OnInit } from '@angular/core';
import { DataService } from "../../db/data.service";

@Component({
  providers:[DataService],
  selector: 'app-aboutUs',
  templateUrl: './aboutUs.component.html'
})
export class aboutUsComponent implements OnInit {

  key: string = 'aboutUs'

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {

  }
}
