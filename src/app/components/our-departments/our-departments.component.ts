import { Component, OnInit } from '@angular/core';
import { HttpService } from "../../service/http.service";

export interface Department {
  name: string
  description: string
}

@Component({
  selector: 'app-our-departments',
  templateUrl: './our-departments.component.html',
  styleUrls: ['./our-departments.component.scss'],
  providers: [
    HttpService,
  ],
})
export class OurDepartmentsComponent implements OnInit {

  departments: Department[] = [];

  constructor
  (
    private http: HttpService
  ) {
  }

  ngOnInit(): void {
    // this.getDepartment()
  }


  getDepartment() {
    this.http.getAll('https://api-medical-clinic.herokuapp.com/department/get-all')
      .subscribe({
        next: ({response}: any) => {
          console.log(response)
          const departments = response.departments

          this.departments = departments.map((department: any) => {
            const data = department.data
            return {
              title: data.title,
              description: data.description
            }
          })
        }
      })
  }
}
