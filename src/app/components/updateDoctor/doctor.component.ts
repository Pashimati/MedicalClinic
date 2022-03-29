import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { HttpService } from "../../service/http.service";


@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['../my-profile/my-profile.component.scss'],
  providers: [HttpService]
})
export class DoctorComponent implements OnInit {

  doctor = {
    id: '',
    name: '',
    surname: '',
    speciality: '',
  }

  constructor
  (
    private route: ActivatedRoute,
    private http: HttpService
  ) {
  }
  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap(params => params.getAll('id'))
    )
      .subscribe((id) => {
        this.http.getFileById('http://localhost:8080/doctor/get', id)
          .subscribe({
            next: ({response}: any) => {
              const doctor = response.doctor
              this.doctor.name = doctor.name,
              this.doctor.surname = doctor.surname,
              this.doctor.speciality = doctor.speciality
              this.doctor.id = id
            }
          })
      });
  }
}
