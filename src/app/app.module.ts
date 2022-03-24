import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './components/navigation/navigation.component';
import { SectionIndexComponent } from './components/section-index/section-index.component';
import { HeaderComponent } from './components/header/header.component';
import { HomepageBoxesComponent } from './components/homepage-boxes/homepage-boxes.component';
import { BtnComponent } from './components/btn/btn.component';
import { FormAppoitnmentComponent } from './components/form-appoitnment/form-appoitnment.component';
import { OurDepartmentsComponent } from './components/our-departments/our-departments.component';
import { DepartmentsCardComponent } from './components/departments-card/departments-card.component';
import { TheNewsComponent } from './components/the-news/the-news.component';
import { FooterComponent } from './components/footer/footer.component';
import { AuthorizationComponent } from './components/authorization/authorization.component';
import { TeamComponent } from './components/team/team.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { SectionPreviewComponent } from "./components/section-preview/section-preview.component";
import { ServiceBoxComponent } from './components/service-box/service-box.component';
import { DoctorCardComponent } from './components/doctor-card/doctor-card.component';
import { ModalDialogComponent } from "./components/modal-dialog/modal-dialog.component";
import { backBtnComponent } from "./components/backBtn/backBtn.component"
import { ToDoListComponent } from "./components/to-do-list/to-do-list.component"

import { DataService } from "./db/data.service";


import { IndexComponent } from "./views/index/index.component";
import { aboutUsComponent } from "./views/aboutUs/aboutUs.component";
import { contactComponent } from "./views/contact/contact.component";
import { profileComponent } from "./views/profile/profile.component";
import { serviceComponent } from "./views/service/service.component";



import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MapComponent } from './components/map/map.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SectionIndexComponent,
    HeaderComponent,
    HomepageBoxesComponent,
    BtnComponent,
    FormAppoitnmentComponent,
    OurDepartmentsComponent,
    DepartmentsCardComponent,
    TheNewsComponent,
    FooterComponent,
    AuthorizationComponent,
    TeamComponent,
    RegistrationComponent,
    MyProfileComponent,
    MapComponent,
    SectionPreviewComponent,
    ServiceBoxComponent,
    IndexComponent,
    aboutUsComponent,
    contactComponent,
    profileComponent,
    serviceComponent,
    DoctorCardComponent,
    ModalDialogComponent,
    backBtnComponent,
    ToDoListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatCardModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule
  ],
  providers: [
    DataService,
    MatDatepickerModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
