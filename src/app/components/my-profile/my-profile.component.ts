import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { switchMap } from "rxjs/operators";
import { ActivatedRoute } from "@angular/router";
import { HttpService } from "../../service/http.service";
import { MatSnackBar } from "@angular/material/snack-bar";


@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss'],
  providers: [HttpService]
})
export class MyProfileComponent implements OnInit {

  profile: FormGroup
  fileName: string =''

  constructor
  (
    private http: HttpService,
    private _snackBar: MatSnackBar,
    private route: ActivatedRoute,
  ) {
    this.profile = new FormGroup({

      name: new FormControl("", Validators.min(3)),
      surname: new FormControl("", Validators.min(3)),
      sex: new FormControl(),
      age: new FormControl("", Validators.pattern("[0-9]{2}")),
      address: new FormControl("", Validators.min(20)),
      phone: new FormControl("", Validators.pattern("[- +()0-9]+")),
      fileName: new FormControl(),
    });

  }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap(params => params.getAll('id')))
      .subscribe((id) => {
        this.fileName = id
      })
  }


  submit() {
    const data = this.profile.getRawValue()
    this.http.addAndUpdateFile("http://localhost:8080/user/add", data)
      .subscribe({
        next: ({response}:any) => {
          if (response.success) {
            this._snackBar.open('User has been created', 'Undo', {
              duration: 3000
            });
          } else {
            this._snackBar.open('User not been created', 'Undo', {
              duration: 3000
            });
          }
        }
      });
  }
}
