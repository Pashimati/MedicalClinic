import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-of-entries',
  templateUrl: './listOfEntries.component.html',
  styleUrls: ['./listOfEntries.component.scss'],
})
export class listOfEntriesComponent implements OnInit {

  users: [] = [];

  constructor() { }

  ngOnInit(): void {
  }

  // getSubscribeUsers() {
  //   this.users = this.http.getAll('https://api-medical-clinic.herokuapp.com/doctor/get-all')
  //     .subscribe({
  //       next: ({response}: any) => {
  //         const users = response.users
  //
  //         this.doctors = doctors.map((doctor: any) => {
  //           const data = doctor.data
  //           return {
  //             name: data.name,
  //             surname: data.surname,
  //             speciality: data.speciality,
  //             department: data.department,
  //             about: data.about,
  //           }
  //         })
  //       }
  //     })
  // }

}
