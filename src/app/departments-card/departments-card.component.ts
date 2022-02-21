import {Component, Input, OnInit} from '@angular/core';
import {Department} from "../our-departments/our-departments.component";

@Component({
  selector: 'app-departments-card',
  templateUrl: './departments-card.component.html',
  styleUrls: ['./departments-card.component.scss']
})
export class DepartmentsCardComponent implements OnInit {

  @Input() title: string = ''
  @Input() department: any;

  constructor() { }

  ngOnInit(): void {
  }

}
