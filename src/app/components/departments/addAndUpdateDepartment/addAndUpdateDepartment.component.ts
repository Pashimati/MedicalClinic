import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { HttpService } from "../../../service/http.service";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: 'app-addAndUpdateDepartment',
  templateUrl: './addAndUpdateDepartment.component.html',
  styleUrls: ['../../my-profile/my-profile.component.scss'],
  providers: [HttpService]
})
export class AddAndUpdateDepartment implements OnInit {

  department = {
    id: '',
    title: '',
    description: '',
  }

  flag: boolean = false

  constructor
  (
    private route: ActivatedRoute,
    private http: HttpService,
    private _snackBar: MatSnackBar
  ) {

  }

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap(params => params.getAll('id'))
    )
      .subscribe((id) => {
        this.http.getFileById(' https://api-medical-clinic.herokuapp.com/department/get/', id)
          .subscribe({
            next: ({response}: any) => {
              const department = response.department
              this.department.id = id
              this.department.title = department.title
              this.department.description = department.description
              if (id) {
                this.flag = true
              }
            }
          })
      });
  }

  updateDepartment() {
    this.http.addAndUpdateFile("https://api-medical-clinic.herokuapp.com/department/update", this.department)
      .subscribe({
        next: ({response}:any) => {
          if (response.success) {
            this._snackBar.open('Department has been updated', 'Undo', {
              duration: 3000
            });
          } else {
            this._snackBar.open('Department not been updated', 'Undo', {
              duration: 3000
            });
          }
        }
      });
  }


  addDepartment() {
    this.http.addAndUpdateFile("https://api-medical-clinic.herokuapp.com/department/add", this.department )
      .subscribe({
        next: ({response}:any) => {
          if (response.success) {
            this._snackBar.open('Department has been created', 'Undo', {
              duration: 3000
            });
          } else {
            this._snackBar.open('Department not been created', 'Undo', {
              duration: 3000
            });
          }
        }
      });
  }
}
