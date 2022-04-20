import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entry-card',
  templateUrl: './entryCard.component.html',
  styleUrls: ['./entryCard.component.scss'],
})
export class entryCardComponent implements OnInit {

  UserData = {
    name: 'Павел',
    surname: 'Кошубович',
    sex: 'Мужской',
    date: '20.04.2022 Monday 18.35',
    address: 'г. Гродно, ул. Южная д 17 кв 7',
    phone: '+37529547713',
    email: 'pashimatii@gmail.com',
  }


  constructor() { }

  ngOnInit(): void {
  }

}
