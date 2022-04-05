import { Injectable } from '@angular/core';
import { ajax } from 'rxjs/ajax';

@Injectable()
export class AuthAndRegisterService {

  data: any = null;

  authAndRegister(url: string, data: any) {
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
}





