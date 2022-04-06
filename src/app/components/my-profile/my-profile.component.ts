import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { switchMap } from "rxjs/operators";
import { ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {

  profile: FormGroup


  user = {
    id: '',
    name: '',
    surname: '',
  }



  constructor
  (
    private route: ActivatedRoute,
  ) {
    this.profile = new FormGroup({

      name: new FormControl("", Validators.min(3)),
      surname: new FormControl("", Validators.min(3)),
      sex: new FormControl(),
      age: new FormControl("", Validators.pattern("[0-9]{2}")),
      address: new FormControl("", Validators.min(20)),
      phone: new FormControl("", Validators.pattern("[- +()0-9]+")),
      id: new FormControl(),
    });

  }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap(params => params.getAll('id'))
    ) .subscribe((id) => {
        this.user.id = id
      console.log(id)
    })
  //     .subscribe((id) => {
  //       this.http.getFileById(' https://api-medical-clinic.herokuapp.com/doctor/get/', id)
  //         .subscribe({
  //           next: ({response}: any) => {
  //             const doctor = response.doctor
  //             this.doctor.name = doctor.name,
  //               this.doctor.surname = doctor.surname,
  //               this.doctor.speciality = doctor.speciality
  //             this.doctor.id = id
  //           }
  //         })
  //     });
  // }
  }


// при заполнении формы отправлять его в базу юзерс с названием файла колекции "уникальный айдишник"


  submit() {
    const data = this.profile.getRawValue()
    console.log(data)
  }
}
