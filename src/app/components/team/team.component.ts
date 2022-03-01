import { Component, OnInit } from '@angular/core';
import { DataService } from "../../db/data.service";

export interface Doctor {
  name: string
  surname: string
  photo: string
  aboutMe: string
  speciality: string
}

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
  providers: [DataService],
})
export class TeamComponent implements OnInit {

  doctors: Doctor[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.doctors = this.dataService.getDoctors()
  }

}
