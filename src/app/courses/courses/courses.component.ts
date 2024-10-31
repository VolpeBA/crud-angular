import { Component, OnInit } from '@angular/core';
import { Course } from '../models/course';
import { CoursesService } from '../services/courses.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

@Component({
  selector: 'app-courses', // <app-courses></app-courses>
  templateUrl: './courses.component.html', // HTML
  styleUrls: ['./courses.component.scss'] // CSS
})
export class CoursesComponent {

  courses$: Observable<Course[]>;
  displayedColumns = ['_id', 'name', 'category'];

  // CoursesService: CoursesService; // Dependency Injection 1 passo

  constructor(
    private CoursesService: CoursesService,
    public dialog: MatDialog
  ) {
    // this.CoursesService = new CoursesService(); // Dependency Injection 2 passo
    // this.courses = this.CoursesService.findAll();
    this.courses$ = this.CoursesService.findAll().pipe(
      catchError(error => {
        this.onError('Erro ao carregar cursos.');
        return of([]);
      }),
    );
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }
}
