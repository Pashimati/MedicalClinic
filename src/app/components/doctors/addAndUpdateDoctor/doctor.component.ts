import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { HttpService } from "../../../service/http.service";
import { MatSnackBar } from "@angular/material/snack-bar";

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
   this.http.addAndUpdateFile("https://api-medical-clinic.herokuapp.com/doctor/update", this.doctor)
     .subscribe({
       next: ({response}:any) => {
         if (response.success) {
           this._snackBar.open('Doctor has been updated', 'Undo', {
             duration: 3000
           });
         } else {
           this._snackBar.open('Doctor not been updated', 'Undo', {
             duration: 3000
           });
         }
       }
     });
  }

  addDoctor() {
    this.http.addAndUpdateFile("http://localhost:8080/doctor/add", this.doctor)
      .subscribe({
        next: ({response}:any) => {
          if (response.success) {
            this._snackBar.open('Doctor has been created', 'Undo', {
              duration: 3000
            });
          } else {
            this._snackBar.open('Doctor not been created', 'Undo', {
              duration: 3000
            });
          }
        }
      });
  }
}
