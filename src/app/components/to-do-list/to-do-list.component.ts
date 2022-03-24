import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  surname: string;
  position: number;
  age: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', surname: 'Hydrogen', age: 21},
  {position: 2, name: 'Helium', surname: 'Hydrogen', age: 21},
  {position: 3, name: 'Lithium', surname: 'Hydrogen', age: 21},
  {position: 4, name: 'Beryllium', surname: 'Hydrogen', age: 21},
  {position: 5, name: 'Boron', surname: 'Hydrogen', age: 21},
  {position: 6, name: 'Carbon', surname: 'Hydrogen', age: 21},
  {position: 7, name: 'Nitrogen', surname: 'Hydrogen', age: 21},
  {position: 8, name: 'Oxygen', surname: 'Hydrogen', age: 21},
  {position: 9, name: 'Fluorine', surname: 'Hydrogen', age: 21},
  {position: 10, name: 'Neon', surname: 'Hydrogen', age: 21},
];

/**
 * @title Basic use of `<table mat-table>`
 */

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {

  ngOnInit(): void {

  }
  displayedColumns: string[] = ['position', 'name', 'surname', 'age', 'actions'];
  dataSource = ELEMENT_DATA;
}
