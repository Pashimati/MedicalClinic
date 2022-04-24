import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { HttpService } from "../../../service/http.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import { LoaderService } from "../../../service/loader.service";

@Component({
  selector: 'app-addAndUpdateSpeciality',
  templateUrl: './addAndUpdateSpeciality.component.html',
  styleUrls: ['../../my-profile/my-profile.component.scss'],
  providers: [HttpService]
})
export class AddAndUpdateSpeciality implements OnInit {

  speciality = {
    id: '',
    title: '',
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
        this.http.getFileById(' https://api-medical-clinic.herokuapp.com/speciality/get/', id)
          .subscribe({
            next: ({response}: any) => {
              const speciality = response.speciality
              this.speciality.id = id
              this.speciality.title = speciality.title
              if (id) {
                this.flag = true
              }
            }
          })
      });
  }

  updateSpeciality() {
    this.loader.show()
    this.http.addAndUpdateFile("https://api-medical-clinic.herokuapp.com/speciality/update", this.speciality)
      .subscribe({
        next: ({response}:any) => {
          if (response.success) {
            this.router.navigate(['/admin/speciality']);

            this._snackBar.open('Speciality has been updated', 'Undo', {
              duration: 3000
            });
          } else {
            this._snackBar.open('Speciality not been updated', 'Undo', {
              duration: 3000
            });
          }
          this.loader.hide()
        }
      });
  }


  addSpeciality() {
    this.loader.show()

    this.http.addAndUpdateFile("https://api-medical-clinic.herokuapp.com/speciality/add", this.speciality )
      .subscribe({
        next: ({response}:any) => {
          if (response.success) {
            this.router.navigate(['/admin/speciality']);

            this._snackBar.open('Speciality has been created', 'Undo', {
              duration: 3000
            });
          } else {
            this._snackBar.open('Speciality not been created', 'Undo', {
              duration: 3000
            });
          }
          this.loader.hide()
        }
      });
  }
}
