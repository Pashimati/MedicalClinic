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

  role: string = ''

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
              this.authAndRegisterService.getRole(token)
                .subscribe({
                  next: ({response}:any) => {
                    this.role = response.role
                    localStorage.setItem('role', this.role)

                    if (this.role == 'ADMIN') {
                      Emitters.roleEmitter.emit('ADMIN')
                      this.router.navigate(['/home']);

                    } else if (this.role == 'DOCTOR') {
                      Emitters.roleEmitter.emit('DOCTOR')
                      this.router.navigate(['/listOfEntries']);

                    } else {
                      Emitters.roleEmitter.emit('USER')
                      this.router.navigate(['/profile', uid]);
                    }
                  }
                });
              const uid = user.uid
              localStorage.setItem('currentUserUid', uid)
              Emitters.authEmitter.emit(true)
              this._snackBar.open('You are logged in!', 'Undo', {
                duration: 5000
              });
              this.loader.hide()
          })
    })
  }
}

