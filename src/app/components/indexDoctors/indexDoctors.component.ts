import { Component, OnInit } from '@angular/core';
import { HttpService } from "../../service/http.service";
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoaderService } from '../../service/loader.service';

export interface DoctorTableElement {
  id: string
  name: string;
  surname: string;
  speciality: string;
  position: number;
  department: string;
}

@Component({
  selector: 'app-to-do-list',
  templateUrl: './indexDoctors.component.html',
  styleUrls: ['./indexDoctors.component.scss'],
  providers: [HttpService, LoaderService]
})
export class IndexDoctorsComponent implements OnInit {
  constructor(
    private http: HttpService,
    private _snackBar: MatSnackBar,
    private loaderService: LoaderService,
  ) {
  }


  doctors: DoctorTableElement [] = []

  ngOnInit() {
    // this.loaderService.show()
    this.updateTableList()
  }

  displayedColumns: string[] = ['position', 'name', 'surname','speciality','department', 'actions'];


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
              department: data.department,
            }
          })
          // this.loaderService.hide()
        }
      })
  }
  removeDoctor(id: string) {
    this.http.deleteFileById('https://api-medical-clinic.herokuapp.com/doctor/delete', id)
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

}
