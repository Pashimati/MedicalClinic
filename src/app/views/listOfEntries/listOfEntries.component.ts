import { Component, OnInit } from '@angular/core';
import { HttpService } from "../../service/http.service";
import { switchMap } from "rxjs/operators";
import { ActivatedRoute } from "@angular/router";
import { LoaderService } from "../../service/loader.service";

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
   private loader: LoaderService,
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
    this.loader.show()
    const storageUid = localStorage.getItem('currentUserUid')
    this.http.getAllById('http://localhost:8080/subscription/get-all-byId', uid ?? storageUid)
      .subscribe({
        next: ({response}: any) => {
          const subscriptions = response.subscriptionsById
          console.log(subscriptions)
            subscriptions.map((subscription: any) => {
              const uidUser = subscription.data.uidUser
              const id = subscription.id
              console.log(id)
              const email = subscription.data.email
              let date = subscription.data.date
              if (date) {
                date = new Date(date)
                console.log(date)
              }
              this.http.getFileById('http://localhost:8080/user/get/', uidUser)
               .subscribe({
                 next: ({response}: any) => {
                   const user = response.user
                   this.users.push({...user, email, date, id})
                 }
               })
          })
          this.loader.hide()
        }
      })
  }
}
