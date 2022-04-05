import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AuthAndRegisterService } from "../../service/authAndRegister.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from '@angular/router';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss'],
  providers: [AuthAndRegisterService]
})
export class AuthorizationComponent implements OnInit {
  login : FormGroup;

  constructor(
    private authAndRegisterService: AuthAndRegisterService,
    private _snackBar: MatSnackBar,
    private router: Router,
  ) {
    this.login = new FormGroup({

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
    const data = this.login.getRawValue()
    console.log(data)
    this.authAndRegisterService
      .authAndRegister('http://localhost:8080/auth/signin', data)
      .subscribe({
        next: () => {
          this.router.navigate(['/profile']);
          this._snackBar.open('You are logged in!', 'Undo', {
            duration: 5000
          });
        }
      });
  }

}
// получить дату из формы
// записать ее в объект дата
// передать объект дата в функцию аутРегистер
// отправить на бэк
// на бэке доствать из боди/дата/емаил и пароль
