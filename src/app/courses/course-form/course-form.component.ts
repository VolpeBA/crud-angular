import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesService } from '../services/courses.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss'],
})
export class CourseFormComponent implements OnInit {
  form: UntypedFormGroup = this.formBuilder.group({});

  constructor(
    private formBuilder: UntypedFormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private service: CoursesService,
    private snackBar: MatSnackBar,
    private Location: Location
  ) {
    // this.form = this.formBuilder.group({
    //   name: [null],
    //   category: [null],
    // });
    this.form = this.formBuilder.group({
      name: [null, [Validators.required, Validators.maxLength(255)]],
      category: [null],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    this.service.save(this.form.value).subscribe(
      (data) => this.onSuccess(),
      (error) => this.onError()
    );
    this.onCancel();
  }

  private onSuccess() {
    this.snackBar.open('Curso salvo com sucesso!', '', {
      duration: 5000,
    });
  }

  private onError() {
    this.snackBar.open('Erro ao salvar o curso, tente novamente!', '', {
      duration: 5000,
    });
  }

  onCancel() {
    this.Location.back();
  }
}
