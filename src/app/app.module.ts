import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { SectionHeaderComponent } from './section-header/section-header.component';
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



import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { RegistrationComponent } from './registration/registration.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SectionHeaderComponent,
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
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatCardModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
