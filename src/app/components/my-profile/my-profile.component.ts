import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { switchMap } from "rxjs/operators";
import { ActivatedRoute } from "@angular/router";
import { HttpService } from "../../service/http.service";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss'],
  providers: [HttpService]
})
export class MyProfileComponent implements OnInit {

  profile: FormGroup
  id: string =''

  user = {
    fileName: '',
    name: '',
    surname: '',
    sex: '',
    age: '',
    address: '',
    phone: '',
  }

  flag: boolean = false;

  constructor
  (
    private http: HttpService,
    private _snackBar: MatSnackBar,
    private route: ActivatedRoute,
  ) {
    this.profile = new FormGroup({
      email: new FormControl("", Validators.min(3)),
      password: new FormControl("", Validators.min(3)),
      name: new FormControl("", Validators.min(3)),
      surname: new FormControl("", Validators.min(3)),
      sex: new FormControl(),
      age: new FormControl("", Validators.pattern("[0-9]{2}")),
      address: new FormControl("", Validators.min(20)),
      phone: new FormControl("", Validators.pattern("[- +()0-9]+")),
      fileName: new FormControl(),

    });
  }

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap(params => params.getAll('id'))
    )
      .subscribe((fileName) => {
        this.http.getFileById('https://api-medical-clinic.herokuapp.com/user/get/', fileName)
          .subscribe({
            next: ({response}: any) => {
              const user = response.user
              this.user.fileName = fileName
              if (user) {
                this.user.name = user.name
                this.user.surname = user.surname
                this.user.sex = user.sex
                this.user.age = user.age
                this.user.phone = user.phone
                this.user.address = user.address
              }
              this.profile.setValue(this.user)

              if (fileName && fileName != 'RIusPC2CQFc5hMR493vOHjvcHMN2') {
                this.flag = true
              }
            }
          })
      });
  }

  updateUser() {
    this.http.addAndUpdateFile("https://api-medical-clinic.herokuapp.com/user/update", this.profile.getRawValue())
      .subscribe({
        next: ({response}:any) => {
          if (response.success) {
            this._snackBar.open('User has been updated', 'Undo', {
              duration: 3000
            });
          } else {
            this._snackBar.open('User not been updated', 'Undo', {
              duration: 3000
            });
          }
        }
      });
  }

  addUser() {
    const data = this.profile.getRawValue()
    console.log(data)
    this.http.addAndUpdateFile("https://api-medical-clinic.herokuapp.com/user/add", data)
      .subscribe({
        next: ({response}:any) => {
          if (response.success) {
            this._snackBar.open('User has been created', 'Undo', {
              duration: 3000
            });
          } else {
            this._snackBar.open('User not been created', 'Undo', {
              duration: 3000
            });
          }
        }
      });
  }
}
