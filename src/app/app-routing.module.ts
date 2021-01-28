import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ImagesComponent} from './images/images.component';
import {ImageComponent} from './image/image.component';

// маршруты
const routes: Routes = [
  {path: 'images', component: ImagesComponent},
  {path: 'images/:imageId', component: ImageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
