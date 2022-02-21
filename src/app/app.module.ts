import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { SectionIndexComponent } from './section-index/section-index.component';
import { HeaderComponent } from './header/header.component';
import { HomepageBoxesComponent } from './homepage-boxes/homepage-boxes.component';
import { BtnComponent } from './btn/btn.component';
import { FormAppoitnmentComponent } from './form-appoitnment/form-appoitnment.component';
import { OurDepartmentsComponent } from './our-departments/our-departments.component';
import { DepartmentsCardComponent } from './departments-card/departments-card.component';
import { TheNewsComponent } from './the-news/the-news.component';
import { FooterComponent } from './footer/footer.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import { TeamComponent } from './team/team.component';
import { RegistrationComponent } from './registration/registration.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { SectionPreviewComponent } from "./section-preview/section-preview.component";
import { ServiceBoxComponent } from './service-box/service-box.component';

import {DataService} from "./db/data.service";


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
import { MapComponent } from './map/map.component';
import { DoctorCardComponent } from './doctor-card/doctor-card.component';



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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatCardModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
