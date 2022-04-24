import {Component, OnInit, Output} from '@angular/core';
import { Doctor } from "../team/team.component";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { HttpService } from "../../service/http.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import { LoaderService } from "../../service/loader.service";


interface nameDepartment {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-form-appointment',
  templateUrl: './form-appointment.component.html',
  styleUrls: ['./form-appointment.component.scss'],
  providers: [
    HttpService,
  ]
})
export class FormAppointmentComponent implements OnInit {

  appointment: FormGroup

  doctors: Doctor [] = [];

  allDoctors: Doctor [] = [];

  nameDepartments: nameDepartment[] = [];

  constructor
  (
    private http : HttpService,
    private loader : LoaderService,
    private _snackBar: MatSnackBar
  ) {
    this.appointment = new FormGroup({

      date: new FormControl(),
      time: new FormControl(),
      email: new FormControl("", [
        Validators.required,
        Validators.email
      ]),
      name: new FormControl(),
      nameDepartment: new FormControl(),
      nameDoctor: new FormControl(),
    });
  }

  ngOnInit(): void {
    this.setNameDepartments()
    this.setDoctors()
  }

  setNameDepartments () {
    this.http.getAll('https://api-medical-clinic.herokuapp.com/department/get-all')
      .subscribe({
        next: ({response}: any) => {
          const departments = response.departments

          this.nameDepartments = departments.map((department: any) => {
            const data = department.data
            return {
              viewValue: data.title,
              value: data.title,
            }
          })
        }
      })
  }

  setDoctors (): any {
    this.http.getAll('https://api-medical-clinic.herokuapp.com/doctor/get-all')
      .subscribe({
        next: ({response}: any) => {
          const doctors = response.doctors

          this.allDoctors = doctors.map((doctor: any) => {
            const data = doctor.data
            return {
              doctorUid: data.doctorUid,
              name: data.name,
              surname: data.surname,
              department: data.department,
            }
          })
        }
      })
  }


  onChange(event: any) {
    const department: string = event.value
    this.doctors = this.getDoctors(department);
  }

  getDoctors(department: string) {

    let response: Doctor [] = []

    this.allDoctors.forEach((doctor) => {
      if (doctor.department === department) {
        response.push(doctor)
      }
    })
   return response
  }

  submit() {
    this.loader.show()
    const data = this.appointment.getRawValue()
    data.uidUser = localStorage.getItem('currentUserUid')

    this.http.addAndUpdateFile('http://localhost:8080/subscription/add', data)
      .subscribe({
        next: ({response}:any) => {
          if (response.success) {
            this._snackBar.open('You have an appointment with a doctor', 'Undo', {
              duration: 3000
            });
          } else {
            this._snackBar.open('Unsuccessful!', 'Undo', {
              duration: 3000
            });
          }
          this.loader.hide()
        }
      });
  }

}
