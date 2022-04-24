import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-entry-card',
  templateUrl: './entryCard.component.html',
  styleUrls: ['./entryCard.component.scss'],
})
export class entryCardComponent implements OnInit {

  @Input() user: any;

  constructor() { }

  ngOnInit(): void {
  }

}
