import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AuthAndRegisterService } from "../../service/authAndRegister.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import {Router} from '@angular/router';
import {LoaderService} from "../../service/loader.service";


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['../authorization/authorization.component.scss'],
  providers: [AuthAndRegisterService,LoaderService]
})
export class RegistrationComponent implements OnInit {
  register : FormGroup;


  constructor(
    private loader: LoaderService,
    private authAndRegisterService: AuthAndRegisterService,
    private _snackBar: MatSnackBar,
    private router: Router,
  ) {
    this.register = new FormGroup({

      "email": new FormControl("", [
        Validators.required,
        Validators.email
      ]),
      "password": new FormControl("", Validators.pattern("[0-9]{10}"))
    });
  }

  ngOnInit(): void {
  }

  submit(): void {
   // this.loader.show()
   const data = this.register.getRawValue()
   this.authAndRegisterService
      .authAndRegister('https://api-medical-clinic.herokuapp.com/auth/signup', data)
      .subscribe({
        next: () => {
          this.router.navigate(['/authorization']);
          this._snackBar.open('User created!', 'Undo', {
            duration: 5000
          });
          // this.loader.hide()

        }
      });
  }

}
// получить дату из формы
// записать ее в объект дата
// передать объект дата в функцию аутРегистер
// отправить на бэк
// на бэке доствать из боди/дата/емаил и пароль
