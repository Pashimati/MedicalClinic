import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NavigationService} from "./service/navigation.service";

const routes: Routes = NavigationService.getRoutes()

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    NavigationService
  ]
})
export class AppRoutingModule { }
