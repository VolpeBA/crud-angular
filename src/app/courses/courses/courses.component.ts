import { Component, OnInit } from '@angular/core';
import { Course } from '../models/course';
import { CoursesService } from '../services/courses.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-courses', // <app-courses></app-courses>
  templateUrl: './courses.component.html', // HTML
  styleUrls: ['./courses.component.scss'] // CSS
})
export class CoursesComponent implements OnInit {

  courses: Observable<Course[]>;
  displayedColumns = ['name', 'category'];

  // CoursesService: CoursesService; // Dependency Injection 1 passo

  constructor(private CoursesService: CoursesService) {
    // this.CoursesService = new CoursesService(); // Dependency Injection 2 passo
    // this.courses = this.CoursesService.findAll();
    this.courses = this.CoursesService.findAll();
  }

  ngOnInit(): void {
  }

}
