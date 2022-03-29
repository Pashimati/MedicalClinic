import { Component, OnInit } from '@angular/core';
import { HttpService } from "../../service/http.service";
import { MatSnackBar } from '@angular/material/snack-bar';

export interface DoctorTableElement {
  id: string
  name: string;
  surname: string;
  speciality: string;
  position: number;
}

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss'],
  providers: [HttpService]
})
export class ToDoListComponent implements OnInit {
  constructor(
    private http: HttpService,
    private _snackBar: MatSnackBar
  ) {
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

  removeDoctor(id: string) {
    this.http.deleteFileById('http://localhost:8080/doctor/delete', id)
      .subscribe({
      next: ({response}:any) => {
        if (response.success) {
          this.updateTableList()
          this._snackBar.open('Doctor has been deleted', 'Undo', {
            duration: 3000
          });
        } else {
          this._snackBar.open('Doctor not been deleted', 'Undo', {
            duration: 3000
          });
        }
      }
    });
  }

  // updateDoctor(id: string) {
  //   console.log('id',id)
  // }

}
