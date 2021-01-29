import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ImagesComponent} from './images/images.component';
import {ImageComponent} from './image/image.component';
import {AuthComponent} from './auth/auth.component';
import {AuthGuardGuard} from './authGuard/auth-guard.guard';

// маршруты
const routes: Routes = [
  {path: '', component: AuthComponent},
  {path: 'images', component: ImagesComponent, canActivate: [AuthGuardGuard]},
  {path: 'images/:imageId', component: ImageComponent, canActivate: [AuthGuardGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
