import {Injectable, OnInit} from '@angular/core';
import { ajax } from 'rxjs/ajax';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Emitters } from "../emitters/emitters";

@Injectable()
export class HttpService implements OnInit {

  token: string = ''
  headers: object = {}
  data: any = null;

  ngOnInit() {
    Emitters.token.subscribe((token) => {
      this.token = token
    })
  }

  getHeaders() {
    if (this.token) {
      return {
        authorization: `Bearer ${this.token}`
      }
    }
    return {}
  }

  getAll(url:string) {
     let data: any = null;
      const obs$ = ajax({
      method: 'GET',
      url: url,
      responseType: 'json',
      headers: this.getHeaders(),
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

  getAllById(url: string, uid: string) {
    let data: any = null;
    const obs$ = ajax({
      method: 'POST',
      url: url,
      body: {
        uid: uid,
      },
      responseType: 'json',
      headers: this.getHeaders(),
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
      headers: this.getHeaders(),

    });
    obs$.pipe((value: any) => {
      data = value;
      return value
    })
    return data;
  }

  getFileById(url: string, id: string) {
    let data: any = null;
    const  obs$ = ajax({
      method: "GET",
      url: url + id,
      headers: this.getHeaders(),

    });
    obs$.pipe((value: any) => {
      data = value;
      return value
    })
    return data;
  }


  addAndUpdateFile(url: string, data: any) {
    const  obs$ = ajax({
      method: "POST",
      url: url,
      body: {
        data: data
      },
      headers: this.getHeaders(),

    });
    obs$.pipe((value: any) => {
      data = value;
      return value
    })
    return data;
  }

}





