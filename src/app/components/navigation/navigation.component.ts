import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalDialogComponent } from "../modal-dialog/modal-dialog.component";
import { Emitters } from "../../emitters/emitters";
import { AuthAndRegisterService } from "../../service/authAndRegister.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";
import { getRoleOrAuthService } from "../../service/getRoleOrAuth.service";


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  providers: [
    AuthAndRegisterService,
    getRoleOrAuthService
  ]
})

export class NavigationComponent implements OnInit {

  id = localStorage.getItem('currentUserUid')
  authenticated = false;
  role = '';

  constructor
  (
    private router: Router,
    private _snackBar: MatSnackBar,
    private authAndRegisterService: AuthAndRegisterService,
    public dialog: MatDialog,
    public getRole: getRoleOrAuthService
  ) {}

  openDialog() {
    this.dialog.open(ModalDialogComponent);
  }

  ngOnInit(): void {
    Emitters.authEmitter.subscribe(
      (auth: boolean) => {
        this.authenticated = auth;
      }
    );
    Emitters.roleEmitter.subscribe(
      (role: string) => {
        this.role = role;
      }
    );
    this.getRole.getRoleOrAuth()
  }

  logout(): void {
    this.authAndRegisterService.logout('https://api-medical-clinic.herokuapp.com/auth/signOut')
      .subscribe({
        next: () => {
          localStorage.clear()
          this.authenticated = false
          this.router.navigate(['/home']);
          this._snackBar.open('You are Logout!', 'Undo', {
            duration: 5000
          });
        },
      })
  }

}

