import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { HttpService } from "../../../service/http.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import { LoaderService } from "../../../service/loader.service";

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
    private loader: LoaderService,
    private router: Router,
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
    this.loader.show()

    this.http.addAndUpdateFile("https://api-medical-clinic.herokuapp.com/department/update", this.department)
      .subscribe({
        next: ({response}:any) => {
          if (response.success) {
            this.router.navigate(['/admin/departments']);

            this._snackBar.open('Department has been updated', 'Undo', {
              duration: 3000
            });
          } else {
            this._snackBar.open('Department not been updated', 'Undo', {
              duration: 3000
            });
          }
          this.loader.hide()

        }
      });
  }


  addDepartment() {
    this.loader.show()
    this.http.addAndUpdateFile("https://api-medical-clinic.herokuapp.com/department/add", this.department )
      .subscribe({
        next: ({response}:any) => {
          if (response.success) {
            this.router.navigate(['/admin/departments']);

            this._snackBar.open('Department has been created', 'Undo', {
              duration: 3000
            });
          } else {
            this._snackBar.open('Department not been created', 'Undo', {
              duration: 3000
            });
          }
          this.loader.hide()
        }
      });
  }
}
