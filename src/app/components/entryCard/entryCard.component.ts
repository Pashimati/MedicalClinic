import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-entry-card',
  templateUrl: './entryCard.component.html',
  styleUrls: ['./entryCard.component.scss'],
})
export class entryCardComponent implements OnInit {

  @Input() User: any;

  constructor() { }

  ngOnInit(): void {
  }

}
