import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {AppComponent} from "./app.component";
import {SecuredComponent} from "./components/secured/secured.component";

export const routes = [
  {path: '', component: AppComponent},
  {path: 'login', component: LoginComponent},
  {path: 'secured', component: SecuredComponent},
  {path: '**', component: AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }