import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { IndexComponent } from "./views/index/index.component";
import { aboutUsComponent } from "./views/aboutUs/aboutUs.component";
import { contactComponent } from "./views/contact/contact.component";
import { profileComponent } from "./views/profile/profile.component";
import { serviceComponent } from "./views/service/service.component";
import { RegistrationComponent } from "./components/registration/registration.component";
import { AuthorizationComponent } from "./components/authorization/authorization.component";
import { DoctorComponent } from "./components/doctor/doctor.component";
import {ToDoListComponent} from "./components/to-do-list/to-do-list.component";


const routes: Routes = [
  { path: '', component: IndexComponent},
  { path: 'home', component: IndexComponent},
  { path: 'aboutUs', component: aboutUsComponent},
  { path: 'contact', component: contactComponent},
  { path: 'profile', component: profileComponent},
  { path: 'service', component: serviceComponent},
  { path: 'registration', component: RegistrationComponent},
  { path: 'authorization', component: AuthorizationComponent},
  { path: 'admin', component: ToDoListComponent},
  { path: 'doctor/:id', component: DoctorComponent},

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
