import { Component, OnInit } from '@angular/core';
import {DataService} from "../db/data.service";

export interface Department {
  name: string
  logoLink: string
  description: string
}

@Component({
  selector: 'app-our-departments',
  templateUrl: './our-departments.component.html',
  styleUrls: ['./our-departments.component.scss'],
  providers: [DataService],
})
export class OurDepartmentsComponent implements OnInit {

  departments: Department[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.departments = this.dataService.getDepartments()
  }

}
