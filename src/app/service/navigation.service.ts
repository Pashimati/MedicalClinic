import { Injectable } from '@angular/core';

import { IndexComponent } from "../views/index/index.component";
import { aboutUsComponent } from "../views/aboutUs/aboutUs.component";
import { contactComponent } from "../views/contact/contact.component";
import { profileComponent } from "../views/profile/profile.component";
import { serviceViewsComponent } from "../views/service/serviceViews.component";
import { RegistrationComponent } from "../components/registration/registration.component";
import { AuthorizationComponent } from "../components/authorization/authorization.component";
import { DoctorComponent } from "../components/doctors/addAndUpdateDoctor/doctor.component";
import { IndexDoctorsComponent } from "../components/doctors/indexDoctors/indexDoctors.component";
import { IndexUsersComponent } from "../components/users/indexUsers/indexUsers.component";
import { IndexDepartmentComponent } from "../components/departments/indexDepartment/indexDepartment.component";
import { AddAndUpdateDepartment } from "../components/departments/addAndUpdateDepartment/addAndUpdateDepartment.component";
import { AddAndUpdateSpeciality } from "../components/speciality/addAndUpdateSpeciality/addAndUpdateSpeciality.component";
import { IndexSpecialityComponent } from "../components/speciality/indexSpeciality/indexSpeciality.component";
import { page404Component } from "../views/page404/page404.component";
import { listOfEntriesComponent } from "../views/listOfEntries/listOfEntries.component";
import { AddAndUpdateUser } from "../components/users/addAndUpdateUser/addAndUpdateUser.component";

@Injectable()
export class NavigationService {
  static getRoutes() {
    return [
      { path: '', component: IndexComponent},
      { path: 'home', component: IndexComponent},
      { path: 'aboutUs', component: aboutUsComponent},
      { path: 'contact', component: contactComponent},
      { path: 'profile', component: profileComponent},
      { path: 'service', component: serviceViewsComponent},
      { path: 'registration', component: RegistrationComponent},
      { path: 'authorization', component: AuthorizationComponent},
      { path: 'admin/doctors', component: IndexDoctorsComponent},
      { path: 'admin/users', component: IndexUsersComponent},
      { path: 'admin/departments', component: IndexDepartmentComponent},
      { path: 'admin/speciality', component: IndexSpecialityComponent},
      { path: 'admin/addAndUpdateDoctor/:id', component: DoctorComponent},
      { path: 'admin/addAndUpdateDoctor', component: DoctorComponent},
      { path: 'profile/addAndUpdateUser/:id', component: profileComponent},
      { path: 'profile/addAndUpdateUser', component: AddAndUpdateUser},
      { path: 'profile/:id', component: profileComponent},
      { path: 'admin/addAndUpdateDepartment', component: AddAndUpdateDepartment},
      { path: 'admin/addAndUpdateDepartment/:id', component: AddAndUpdateDepartment},
      { path: 'admin/addAndUpdateSpeciality', component: AddAndUpdateSpeciality},
      { path: 'admin/addAndUpdateSpeciality/:id', component: AddAndUpdateSpeciality},
      { path: 'doctor/listOfEntries/:id', component: listOfEntriesComponent},
      { path: 'doctor/listOfEntries', component: listOfEntriesComponent},

      { path: '**', component: page404Component},
    ]
  }
}
