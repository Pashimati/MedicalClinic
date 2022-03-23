import {Injectable} from '@angular/core';
import { ajax } from 'rxjs/ajax';
import {map, catchError} from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class HttpService {

   get(url:string) {
    const obs$ = ajax({
      method: 'GET',
      url: url,
      responseType: 'json'
    })

      catchError(error => {
        console.log('error: ', error);
        return of(error);
      })
    obs$.subscribe({
              next: value => console.log(value),
              error: err => console.log(err)
            });
  }


  // getJsonDoctor() {
  //   const obs$ = ajax.getJSON(`https://api-medical-clinic.herokuapp.com/get-all`)
  //     .pipe(
  //         map(userResponse => console.log('users: ', userResponse)),
  //         catchError(error => {
  //             console.log('error: ', error);
  //             return of(error);
  //     })
  //   );
  //   obs$.subscribe({
  //         next: value => console.log(value),
  //         error: err => console.log(err)
  //       });
  // }



  // deleteDoctors() {
  //   const  obs$ = ajax({
  //     method: "DELETE",
  //     url: "https://api-medical-clinic.herokuapp.com/delete-doctor",
  //     body: {},
  //     headers: {},
  //   });
  //
  //   obs$.subscribe({
  //     next: value => console.log(value),
  //     error: err => console.log(err)
  //   });
  // }






  // getDoctors() {
  //   const obs$ = ajax({
  //     url: 'https://api-medical-clinic.herokuapp.com/add-doctor',
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: {
  //       name: 'pasha',
  //       surname: 'koshub',
  //       age: 21
  //     }
  //   }).pipe(
  //     map(response => console.log('response: ', response)),
  //     catchError(error => {
  //       console.log('error: ', error);
  //       return of(error);
  //     })
  //   );
  //
  //
  //   obs$.subscribe({
  //     next: value => console.log(value),
  //     error: err => console.log(err)
  //   });
  // }

  }



