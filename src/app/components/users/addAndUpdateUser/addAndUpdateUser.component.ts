import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { HttpService } from "../../../service/http.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-addAndUpdateUser',
  templateUrl: './addAndUpdateUser.component.html',
  styleUrls: ['../../my-profile/my-profile.component.scss'],
  providers: [HttpService]
})
export class AddAndUpdateUser implements OnInit {

  user: FormGroup
  id: string =''

  flag: boolean = false;

  constructor
  (
    private http: HttpService,
    private _snackBar: MatSnackBar,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.user = new FormGroup({
      email: new FormControl("", Validators.min(3)),
      password: new FormControl("", Validators.min(3)),
      name: new FormControl("", Validators.min(3)),
      surname: new FormControl("", Validators.min(3)),
      sex: new FormControl(),
      age: new FormControl("", Validators.pattern("[0-9]{2}")),
      address: new FormControl("", Validators.min(20)),
      phone: new FormControl("", Validators.pattern("[- +()0-9]+")),
      fileName: new FormControl(),

    });
  }

  ngOnInit() {
  }

  addUser() {
    const data = this.user.getRawValue()
    console.log(data)
    this.http.addAndUpdateFile("http://localhost:8080/user/admin/add", data)
      .subscribe({
        next: ({response}:any) => {
          if (response.success) {
            this.router.navigate(['/home']);
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
