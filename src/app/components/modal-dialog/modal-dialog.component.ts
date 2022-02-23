import { Component } from '@angular/core';

@Component({
  selector: 'app-modal-dialog',
  templateUrl: './modal-dialog.component.html',
  styleUrls: ['./modal-dialog.component.scss']
})
export class ModalDialogComponent {
  isOpen: boolean = false

  closeModal() {
    this.isOpen = true;
  }
}
