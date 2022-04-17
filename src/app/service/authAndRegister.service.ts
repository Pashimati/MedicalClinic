import {Injectable} from '@angular/core';
import {ajax} from 'rxjs/ajax';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from "./firebase.service";

@Injectable()
export class AuthAndRegisterService {


  data: any = null;

  auth = (data: any) => {
    const {email, password} = data
    return signInWithEmailAndPassword(auth, email, password)
  }


  register(url: string, data: any) {
    const  obs$ = ajax({
      method: "POST",
      url: url,
      body: {
        data: data
      },
      headers: {},
    });
    obs$.pipe((value: any) => {
      data = value;
      return value
    })
    return data;
  }


  logout(url: string) {
    let data: any = null;
    const  obs$ = ajax({
      method: "GET",
      url: url,
      body: {},
      headers: {},
    });
    obs$.pipe((value: any) => {
      data = value;
      return value
    })
    return data;
  }
}





