import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { IndexComponent } from "./views/index/index.component";
import { aboutUsComponent } from "./views/aboutUs/aboutUs.component";
import { contactComponent } from "./views/contact/contact.component";
import { profileComponent } from "./views/profile/profile.component";
import { serviceViewsComponent } from "./views/service/serviceViews.component";
import { RegistrationComponent } from "./components/registration/registration.component";
import { AuthorizationComponent } from "./components/authorization/authorization.component";
import { DoctorComponent } from "./components/doctors/addAndUpdateDoctor/doctor.component";
import { IndexDoctorsComponent } from "./components/doctors/indexDoctors/indexDoctors.component";
import { IndexUsersComponent } from "./components/users/indexUsers/indexUsers.component";
import { IndexDepartmentComponent } from "./components/departments/indexDepartment/indexDepartment.component";
import { AddAndUpdateDepartment } from "./components/departments/addAndUpdateDepartment/addAndUpdateDepartment.component";


const routes: Routes = [
  { path: '', component: IndexComponent},
  { path: 'home', component: IndexComponent},
  { path: 'aboutUs', component: aboutUsComponent},
  { path: 'contact', component: contactComponent},
  { path: 'profile', component: profileComponent},
  { path: 'service', component: serviceViewsComponent},
  { path: 'registration', component: RegistrationComponent},
  { path: 'authorization', component: AuthorizationComponent},
  { path: 'doctors', component: IndexDoctorsComponent},
  { path: 'users', component: IndexUsersComponent},
  { path: 'addAndUpdateDoctor/:id', component: DoctorComponent},
  { path: 'addAndUpdateDoctor', component: DoctorComponent},
  { path: 'profile/addAndUpdateDoctor/:id', component: profileComponent},
  { path: 'profile/:id', component: profileComponent},
  { path: 'addAndUpdateDepartment', component: AddAndUpdateDepartment},
  { path: 'addAndUpdateDepartment/:id', component: AddAndUpdateDepartment},
  { path: 'departments', component: IndexDepartmentComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
