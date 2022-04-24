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

  users: object[] = [];

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
    console.log(this.users)
  }

  getSubscribeUsers(uid: string) {
    this.http.getAllById('http://localhost:8080/subscription/get-all-byId', uid )
      .subscribe({
        next: ({response}: any) => {
          const subscriptions = response.subscriptionsById
            subscriptions.map((subscription: any) => {
            const uidUser = subscription.uidUser
              const email = subscription.email
              let date = subscription.date
              if (date) {
                date = new Date(date)
                console.log(date)
              }

              this.http.getFileById('http://localhost:8080/user/get/', uidUser)
               .subscribe({
                 next: ({response}: any) => {
                   const user = response.user
                   this.users.push({...user, email, date})
                 }
               })
          })
        }
      })
  }
}
