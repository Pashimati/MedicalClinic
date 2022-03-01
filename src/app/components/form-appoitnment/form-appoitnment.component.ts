import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-appoitnment',
  templateUrl: './form-appoitnment.component.html',
  styleUrls: ['./form-appoitnment.component.scss'],
  // providers: [DataService]
})
export class FormAppoitnmentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  states: string[] = [
    'Doctor1',
    'Doctor2',
    'Doctor3',
    'Doctor4',
  ];
}

// в первом селекте спрашивать категорию врача и отталкиваясь от категории врача показывать данных врачей
