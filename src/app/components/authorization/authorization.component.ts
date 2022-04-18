import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AuthAndRegisterService } from "../../service/authAndRegister.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from '@angular/router';
import { Emitters } from '../../emitters/emitters';
import {LoaderService} from "../../service/loader.service";

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss'],
  providers: [AuthAndRegisterService,LoaderService]
})
export class AuthorizationComponent implements OnInit {
  login: FormGroup;

  constructor(
    private loader: LoaderService,
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
    this.loader.show()
    const data = this.login.getRawValue()
    this.authAndRegisterService
      .auth(data)
      .then(response => {
        const user = response.user
          user.getIdToken()
          .then( token => {

            // делаю гет запрос на контролер гет-роле

            console.log(token)
            Emitters.token.emit(`${token}`);
            const uid = user.uid
            localStorage.setItem('currentUserUid', uid)

            if (uid == 'RIusPC2CQFc5hMR493vOHjvcHMN2') {
              Emitters.adminEmitter.emit(true);
              this.router.navigate(['/home']);
            } else {
              Emitters.authEmitter.emit(true);
              this.router.navigate(['/profile', uid]);
            }

            this._snackBar.open('You are logged in!', 'Undo', {
              duration: 5000
            });
            this.loader.hide()
          })
    })
  }
}

