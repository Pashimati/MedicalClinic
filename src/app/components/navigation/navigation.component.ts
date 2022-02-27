import {Component} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ModalDialogComponent} from "../modal-dialog/modal-dialog.component";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})

export class NavigationComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(ModalDialogComponent);
  }
}

