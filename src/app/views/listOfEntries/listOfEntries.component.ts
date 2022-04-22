import { Component, OnInit } from '@angular/core';
import { HttpService } from "../../service/http.service";
import { switchMap } from "rxjs/operators";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-list-of-entries',
  templateUrl: './listOfEntries.component.html',
  styleUrls: ['./listOfEntries.component.scss'],
  providers: [HttpService]
})
export class listOfEntriesComponent implements OnInit {

  users: [] = [];

  constructor
  (
   private http: HttpService,
   private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap(params => params.getAll('id'))
    )
      .subscribe((uid) => {
        this.getSubscribeUsers(uid)
      })



  }

  getSubscribeUsers(uid: string) {

    this.users = this.http.getAllById('http://localhost:8080/subscription/get-all-byId', uid )
      .subscribe({
        next: ({response}: any) => {
          const users = response.subscriptionsById

          this.users = users.map((user: any) => {
            const data = user.data
            const userById =  this.getUserById( data.uidUser)
            console.log(userById)
            return {
              uidUser: data.uidUser,
              date: data.date,
              email: data.email
            }
          })
        }
      })
  }

 async getUserById(uidUser: string) {
    this.http.getFileById('http://localhost:8080/user/get/', uidUser)
      .subscribe({
        next: ({response}: any) => {
          const user = response.user
          return {
            name: user.name,
            surname: user.surname,
            sex: user.sex,
            age: user.age,
            phone: user.phone,
            address: user.address,
          }
        }
      })
  }

}
