import {Injectable} from '@angular/core';
import { ajax } from 'rxjs/ajax';
import {map, catchError} from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class HttpService {

  data: any = null;

  getAll(url:string) {
     let data: any = null;
      const obs$ = ajax({
      method: 'GET',
      url: url,
      responseType: 'json'
    })
      catchError(error => {
        console.log('error: ', error);
        return of(error);
      })

      obs$.pipe((value: any) => {
       data = value;
       return value
     })

     return data;
  }


  deleteFileById(url: string, id: string) {
    let data: any = null;
    const  obs$ = ajax({
      method: "POST",
      url: url,
      body: {
        id: id,
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



