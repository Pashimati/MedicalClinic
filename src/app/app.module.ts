import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { SectionHeaderComponent } from './section-header/section-header.component';
import { HeaderComponent } from './header/header.component';
import { HomepageBoxesComponent } from './homepage-boxes/homepage-boxes.component';
import { CallBtnComponent } from './call-btn/call-btn.component';



@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SectionHeaderComponent,
    HeaderComponent,
    HomepageBoxesComponent,
    CallBtnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
