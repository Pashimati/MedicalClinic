import { Injectable, OnInit } from '@angular/core';
import { ajax } from 'rxjs/ajax';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class HttpService implements OnInit {

  headers: object = {}
  data: any = null;

  ngOnInit() {
  }

  getHeaders() {
    const token = localStorage.getItem('token')
    if (token) {
      return {
        authorization: `Bearer ${token}`
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





