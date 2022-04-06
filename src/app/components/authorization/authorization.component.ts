import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AuthAndRegisterService } from "../../service/authAndRegister.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from '@angular/router';
import { Emitters } from '../../emitters/emitters';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss'],
  providers: [AuthAndRegisterService]
})
export class AuthorizationComponent implements OnInit {
  login: FormGroup;
  id: string = ''

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
    this.authAndRegisterService
      .authAndRegister('https://api-medical-clinic.herokuapp.com/auth/signin', data)
      .subscribe({
        next: ({response}: any) => {
          this.id = response.uid
          console.log(this.id)
          Emitters.authEmitter.emit(true);
          this.router.navigate(['/profile', this.id]);
          this._snackBar.open('You are logged in!', 'Undo', {
            duration: 5000
          });
        },
      });
  }
}
