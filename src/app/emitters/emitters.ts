import { EventEmitter } from '@angular/core';

export class Emitters {
  static authEmitter = new EventEmitter<boolean>();
  static roleEmitter = new EventEmitter<string>();
  static token = new EventEmitter<string>();
}
