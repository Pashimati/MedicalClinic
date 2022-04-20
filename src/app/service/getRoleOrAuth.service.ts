import { Injectable } from '@angular/core';
import {Emitters} from "../emitters/emitters";

@Injectable({
  providedIn: 'root'
})
export class getRoleOrAuthService {

  constructor() { }

  getRoleOrAuth() {
    const role = localStorage.getItem('role')
    if (role) {
      Emitters.authEmitter.emit(true)
      if (role === 'ADMIN') {
        Emitters.roleEmitter.emit('ADMIN')
      } else if (role === 'DOCTOR') {
        Emitters.roleEmitter.emit('DOCTOR')
      } else if (role === 'USER') {
        Emitters.roleEmitter.emit('USER')
      }
    }
  }
}
