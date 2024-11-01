import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Course } from '../models/course';
import { delay, take, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

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
      delay(2000), // delay de 2 segundos
      tap(courses => console.log(courses))
    );
  }

  // Posso aceitar o Partial, ou tambem posso retirar o ID do Course para resolver.
  save(record: Partial<Course>) { // record = interface do tipo course
    return this.httpClient.post<Course[]>(this.api, record).pipe(take(1));
  }

  delete(courseId: string): Observable<void> {
    return this.httpClient.delete<void>(`${this.api}/courses/${courseId}`);
  }
}
