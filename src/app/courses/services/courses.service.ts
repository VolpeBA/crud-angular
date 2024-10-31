import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Course } from '../models/course';
import { delay, take, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly api = '/api/courses';
  // Injecao de dependencia do http client (Importar no app.module para ficar global na aplicacao)
  constructor(private httpClient: HttpClient) { }

  findAll() {
    return this.
    httpClient.
    get<Course[]>(this.api).
    pipe(
      take(1), // fechar a conexao, pode-se usar take(1) ou first(), first() é um alias para take(1).
      tap(courses => console.log(courses))
    );
  }
}
