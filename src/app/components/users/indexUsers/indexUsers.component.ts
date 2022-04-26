import { Component, OnInit } from '@angular/core';
import { HttpService } from "../../../service/http.service";
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoaderService } from '../../../service/loader.service';

export interface UserTableElement {
  id: string;
  name: string;
  surname:string;
  sex: string;
  age: number;
  address: string;
  phone: number;
}

@Component({
  selector: 'app-index-users',
  templateUrl: './indexUsers.component.html',
  styleUrls: ['./indexUsers.component.scss'],
  providers: [HttpService, LoaderService]
})
export class IndexUsersComponent implements OnInit {
  constructor(
    private http: HttpService,
    private _snackBar: MatSnackBar,
    private loaderService: LoaderService,
  ) {
  }


  users: UserTableElement [] = []

  ngOnInit() {
    this.updateTableList()
  }

  displayedColumns: string[] = ['position', 'name', 'surname','sex','age', 'address', 'phone', 'actions'];


  updateTableList () {
    this.loaderService.show()
    this.http.getAll('https://api-medical-clinic.herokuapp.com/user/admin/get-all')
      .subscribe({
        next: ({response}: any) => {
          const users = response.users

          this.users = users.map((user: any, key: number) => {
            const data = user.data
            const id = user.id

            return {
              id: id,
              position: key + 1,
              name: data.name,
              surname: data.surname,
              sex: data.sex,
              age: data.age,
              address: data.address,
              phone: data.phone,
            }
          })
          this.loaderService.hide()
        }
      })
  }

  remove(id: string) {
    this.http.deleteFileById('https://api-medical-clinic.herokuapp.com/user/admin/delete', id)
      .subscribe({
      next: ({response}:any) => {
        if (response.success) {
          this.updateTableList()
          this._snackBar.open('User has been deleted', 'Undo', {
            duration: 3000
          });
        } else {
          this._snackBar.open('User not been deleted', 'Undo', {
            duration: 3000
          });
        }
      }
    });
  }

}
