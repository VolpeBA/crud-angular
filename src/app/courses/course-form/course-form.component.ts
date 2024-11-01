import { Component, OnInit } from '@angular/core';
import {  NonNullableFormBuilder, Validators } from '@angular/forms';
import { CoursesService } from '../services/courses.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss'],
})
export class CourseFormComponent implements OnInit {
  // form: UntypedFormGroup = this.formBuilder.group({});
  form = this.formBuilder.group({
    name: ['', [Validators.required,Validators.maxLength(255)]],
    category: [''],
  });

  constructor(
    private formBuilder: NonNullableFormBuilder, // Injecao de dependencia do formBuilder
    private service: CoursesService, // Injecao de dependencia do service
    private snackBar: MatSnackBar, // Injecao de dependencia do snackBar
    private Location: Location // Injecao de dependencia do Location (Para mudar de rota)
  ) {
  }

  ngOnInit(): void {
    this.form.value.name = '';
  }

  onSubmit() {
    this.service.save(this.form.value).subscribe(
      (data) => this.onSuccess(),
      (error) => this.onError()
    );
    this.onCancel();
    // setTimeout(() => {
    //   window.location.reload();
    // }, 1000);
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
