import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalDialogComponent } from "../modal-dialog/modal-dialog.component";
import { Emitters } from "../../emitters/emitters";
import { AuthAndRegisterService } from "../../service/authAndRegister.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  providers: [AuthAndRegisterService]
})

export class NavigationComponent implements OnInit {

  authenticated = false;
  role = '';

  constructor
  (
    private router: Router,
    private _snackBar: MatSnackBar,
    private authAndRegisterService: AuthAndRegisterService,
    public dialog: MatDialog
  ) {}

  openDialog() {
    this.dialog.open(ModalDialogComponent);
  }

  ngOnInit(): void {
    Emitters.authEmitter.subscribe(
      (auth: boolean) => {
        console.log(auth)
        this.authenticated = auth;
      }
    );
    Emitters.roleEmitter.subscribe(
      (role: string) => {
        this.role = role;
        console.log(role)
      }
    );

    const role = localStorage.getItem('role')
    if (role) {
      Emitters.authEmitter.emit(true)
      if (role === 'ADMIN') {
        Emitters.roleEmitter.emit('ADMIN')
      } else if (role === 'DOCTOR') {
        Emitters.roleEmitter.emit('DOCTOR')
      } else if (role === 'USER') {
        Emitters.roleEmitter.emit('USER')
      }
    }


  }

  logout(): void {
    this.authAndRegisterService.logout('https://api-medical-clinic.herokuapp.com/auth/signOut')
      .subscribe({
        next: () => {
          localStorage.removeItem('currentUserUid')
          localStorage.removeItem('role')

          this.authenticated = false
          this.router.navigate(['/home']);
          this._snackBar.open('You are Logout!', 'Undo', {
            duration: 5000
          });
        },
      })
  }

}

