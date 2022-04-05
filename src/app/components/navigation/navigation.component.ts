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
        this.authenticated = auth;
      }
    );
  }

  logout(): void {
    this.authAndRegisterService.logout('https://api-medical-clinic.herokuapp.com/auth/signOut')
      .subscribe({
        next: () => {
          this.authenticated = false
          this.router.navigate(['/home']);
          this._snackBar.open('You are Logout!', 'Undo', {
            duration: 5000
          });
        },
      })
  }

}

