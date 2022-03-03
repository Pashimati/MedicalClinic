import { Component } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: 'app-modal-dialog',
  templateUrl: './modal-dialog.component.html',
  styleUrls: ['./modal-dialog.component.scss']
})
export class ModalDialogComponent {

  constructor(public dialog: MatDialog) {}

  closeDialog() {
    this.dialog.closeAll();
  }
}
