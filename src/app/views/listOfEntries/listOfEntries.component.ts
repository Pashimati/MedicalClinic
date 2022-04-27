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
    this.http.getAllById('https://api-medical-clinic.herokuapp.com/subscription/get-all-byId', uid)
      .subscribe({
        next: ({response}: any) => {
          const subscriptions = response.subscriptionsById
            subscriptions.map((subscription: any) => {
              const uidUser = subscription.data.uidUser
              const id = subscription.id
              const email = subscription.data.email
              let date = subscription.data.date

              let dateString = new Date(date);

             let dateFormat = dateString.getDate()+
                "/"+(dateString.getMonth()+1)+
                "/"+dateString.getFullYear()+
                " "+dateString.getHours()+
                ":"+dateString.getMinutes();

              this.http.getFileById('https://api-medical-clinic.herokuapp.com/user/get/', uidUser)
               .subscribe({
                 next: ({response}: any) => {
                   const user = response.user
                   this.users.push({...user, email, dateFormat, id})
                 }
               })
          })
          this.loader.hide()
        }
      })
  }
}
