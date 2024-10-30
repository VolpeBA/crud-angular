import { NgModule } from '@angular/core';
import { CoursesComponent } from './courses/courses.component';

import { CommonModule } from '@angular/common';
import { CoursesRoutingModule } from './courses-routing.module';
import { AppMaterialModule } from '../shared/app-material/app-material.module';


@NgModule({
  declarations: [
    CoursesComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    AppMaterialModule
  ],
  // exports: [CoursesComponent]
})
export class CoursesModule { }
