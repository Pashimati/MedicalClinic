import { Component, OnInit } from '@angular/core';
import { DataService } from "../../db/data.service";


@Component({
  providers: [DataService],
  selector: 'app-service',
  templateUrl: './serviceViews.component.html'
})
export class serviceViewsComponent implements OnInit {

  dbKey: string = 'service'

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {

  }

}
