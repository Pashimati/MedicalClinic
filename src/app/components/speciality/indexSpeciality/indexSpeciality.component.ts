import { Component, OnInit } from '@angular/core';
import { HttpService } from "../../../service/http.service";
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoaderService } from '../../../service/loader.service';


@Component({
  selector: 'app-index-speciality',
  templateUrl: './indexSpeciality.component.html',
  styleUrls: ['./indexSpeciality.component.scss'],
  providers: [HttpService, LoaderService]
})
export class IndexSpecialityComponent implements OnInit {
  constructor(
    private http: HttpService,
    private _snackBar: MatSnackBar,
    private loaderService: LoaderService,
  ) {
  }


  specialitys: [] = []

  ngOnInit() {
    this.updateTableList()
  }

  displayedColumns: string[] = ['position', 'name', 'actions'];


  updateTableList () {
    this.loaderService.show()
    this.http.getAll('https://api-medical-clinic.herokuapp.com/speciality/get-all')
      .subscribe({
        next: ({response}: any) => {
          const specialitys = response.specialitys

          this.specialitys = specialitys.map((speciality: any, key: number) => {
            const data = speciality.data
            const id = speciality.id
            return {
              id: id,
              position: key + 1,
              title: data.title,
            }
          })

          this.loaderService.hide()
        }
      })
  }

  remove(id: string) {
    this.http.deleteFileById('https://api-medical-clinic.herokuapp.com/speciality/delete', id)
      .subscribe({
      next: ({response}:any) => {
        if (response.success) {
          this.updateTableList()
          this._snackBar.open('Department has been deleted', 'Undo', {
            duration: 3000
          });
        } else {
          this._snackBar.open('Department not been deleted', 'Undo', {
            duration: 3000
          });
        }
      }
    });
  }

}
