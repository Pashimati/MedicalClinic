import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-doctor-card',
  templateUrl: './doctor-card.component.html',
  styleUrls: ['./doctor-card.component.scss']
})
export class DoctorCardComponent implements OnInit {

  @Input() doctor: any;

  constructor() { }

  ngOnInit(): void {
  }

}
