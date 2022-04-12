import { Component, OnInit } from '@angular/core';
import { HttpService } from "../../../service/http.service";
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoaderService } from '../../../service/loader.service';


@Component({
  selector: 'app-index-users',
  templateUrl: './indexDepartment.component.html',
  styleUrls: ['./indexDepartment.component.scss'],
  providers: [HttpService, LoaderService]
})
export class IndexDepartmentComponent implements OnInit {
  constructor(
    private http: HttpService,
    private _snackBar: MatSnackBar,
    private loaderService: LoaderService,
  ) {
  }


  departments: [] = []

  ngOnInit() {
    this.updateTableList()
  }

  displayedColumns: string[] = ['position', 'name', 'actions'];


  updateTableList () {
    this.loaderService.show()
    this.http.getAll('https://api-medical-clinic.herokuapp.com/department/get-all')
      .subscribe({
        next: ({response}: any) => {
          const departments = response.departments

          this.departments = departments.map((department: any, key: number) => {
            const data = department.data
            const id = department.id
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
    this.http.deleteFileById('https://api-medical-clinic.herokuapp.com/department/delete', id)
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
