import {Component, OnInit} from '@angular/core';
import {HttpService} from "../../service/http.service";


export interface DoctorTableElement {
  id: string
  name: string;
  surname: string;
  speciality: string;
  position: number;
}

// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'Hydrogen', surname: 'Hydrogen',speciality: 'Хирург'},
//   {position: 2, name: 'Helium', surname: 'Hydrogen',speciality: 'Хирург'},
//   {position: 3, name: 'Lithium', surname: 'Hydrogen',speciality: 'Хирург'},
//   {position: 4, name: 'Beryllium', surname: 'Hydrogen',speciality: 'Хирург'},
//   {position: 5, name: 'Boron', surname: 'Hydrogen',speciality: 'Хирург'},
//   {position: 6, name: 'Carbon', surname: 'Hydrogen',speciality: 'Хирург'},
//   {position: 7, name: 'Nitrogen', surname: 'Hydrogen',speciality: 'Хирург'},
//   {position: 8, name: 'Oxygen', surname: 'Hydrogen',speciality: 'Хирург'},
//   {position: 9, name: 'Fluorine', surname: 'Hydrogen',speciality: 'Хирург'},
//   {position: 10, name: 'Neon', surname: 'Hydrogen',speciality: 'Хирург'},
// ];

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss'],
  providers: [HttpService]
})
export class ToDoListComponent implements OnInit {

  constructor(private http: HttpService) {
  }

  doctors: DoctorTableElement [] = []

  ngOnInit() {
    this.updateTableList()
  }

  displayedColumns: string[] = ['position', 'name', 'surname','speciality', 'actions'];


  updateTableList () {
    this.http.getAll('https://api-medical-clinic.herokuapp.com/doctor/get-all')
      .subscribe({
        next: ({response}: any) => {
          const doctors = response.doctors

          this.doctors = doctors.map((doctor: any, key: number) => {
            const data = doctor.data
            const id = doctor.id

            return {
              id: id,
              position: key + 1,
              name: data.name,
              surname: data.surname,
              speciality: data.speciality,
            }
          })
        }
      })
  }
}
