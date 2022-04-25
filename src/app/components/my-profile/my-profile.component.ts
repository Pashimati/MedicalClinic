import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { switchMap } from "rxjs/operators";
import {ActivatedRoute, Router} from "@angular/router";
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
    email: '',
    password: ''
  }

  flag: boolean = false;

  constructor
  (
    private http: HttpService,
    private _snackBar: MatSnackBar,
    private route: ActivatedRoute,
    private router: Router
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
        this.user.fileName = fileName
        const uid = localStorage.getItem('currentUserUid')
        this.http.getFileById('http://localhost:8080/user/get/', fileName ?? uid)
          .subscribe({
            next: ({response}: any) => {
              const user = response.user
              if (user) {
                this.user.name = user.name
                this.user.surname = user.surname
                this.user.sex = user.sex
                this.user.age = user.age
                this.user.phone = user.phone
                this.user.address = user.address

                this.flag = true
              }
              this.profile.setValue(this.user)
            }
          })
      });
  }

  updateUser() {
    const data = this.profile.getRawValue()
    this.http.addAndUpdateFile("https://api-medical-clinic.herokuapp.com/user/update", data )
      .subscribe({
        next: ({response}:any) => {
          if (response.success) {
            this.router.navigate(['/home']);
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
    this.http.addAndUpdateFile("https://api-medical-clinic.herokuapp.com/user/add", data)
      .subscribe({
        next: ({response}:any) => {
          if (response.success) {
            this.router.navigate(['/home']);
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
