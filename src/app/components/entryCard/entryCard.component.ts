import {Component, Input, OnInit} from '@angular/core';
import { HttpService } from "../../service/http.service";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: 'app-entry-card',
  templateUrl: './entryCard.component.html',
  styleUrls: ['./entryCard.component.scss'],
  providers: [HttpService]
})
export class entryCardComponent implements OnInit {

  @Input() user: any;

  constructor
  (
    private http: HttpService,
    private _snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
  }


  remove(id: string) {
    this.http.deleteFileById('https://api-medical-clinic.herokuapp.com/subscription/delete', id)
      .subscribe({
        next: ({response}:any) => {
          if (response.success) {

            this._snackBar.open('Subscription has been deleted', 'Undo', {
              duration: 3000
            });
          } else {
            this._snackBar.open('Subscription not been deleted', 'Undo', {
              duration: 3000
            });
          }
        }
      });
  }

}
