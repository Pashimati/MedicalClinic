import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { HttpService } from "../../../service/http.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import { LoaderService } from "../../../service/loader.service";

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['../../my-profile/my-profile.component.scss', 'doctor.component.scss'],
  providers: [HttpService]
})
export class DoctorComponent implements OnInit {

  url: string = ''

  doctor = {
    id: '',
    name: '',
    surname: '',
    speciality: '',
    department: '',
    about: '',
    email: '',
    password: '',
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
        this.http.getFileById('https://api-medical-clinic.herokuapp.com/doctor/get/', id)
          .subscribe({
            next: ({response}: any) => {
              const doctor = response.doctor
              this.doctor.name = doctor.name
              this.doctor.surname = doctor.surname
              this.doctor.speciality = doctor.speciality
              this.doctor.department = doctor.department
              this.doctor.about = doctor.about
              this.doctor.id = id
              if (id) {
                this.flag = true
              }
            }
          })
      });
  }

  updateDoctor() {
    this.loader.show()
    this.http.addAndUpdateFile("https://api-medical-clinic.herokuapp.com/doctor/admin/update", this.doctor)
     .subscribe({
       next: ({response}:any) => {
         if (response.success) {
           this.router.navigate(['/admin/doctors']);

           this._snackBar.open('Doctor has been updated', 'Undo', {
             duration: 3000
           });
         } else {
           this._snackBar.open('Doctor not been updated', 'Undo', {
             duration: 3000
           });
         }
         this.loader.hide()
       }
     });
  }

  addDoctor() {
    this.loader.show()
    this.http.addAndUpdateFile("https://api-medical-clinic.herokuapp.com/doctor/admin/add", this.doctor)
      .subscribe({
        next: ({response}:any) => {
          if (response.success) {
            this.router.navigate(['/admin/doctors']);

            this._snackBar.open('Doctor has been created', 'Undo', {
              duration: 3000
            });
          } else {
            this._snackBar.open('Doctor not been created', 'Undo', {
              duration: 3000
            });
          }
          this.loader.hide()
        }
      });
  }
}
