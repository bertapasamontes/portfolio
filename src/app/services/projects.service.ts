import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LanguageService } from './language.service';
import { map, Observable, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(
    private http: HttpClient,
    private languageService: LanguageService
  ) { }

  getProjects(): Observable<any[]> {
    return this.languageService.currentLanguaje$.pipe(
      switchMap((chosenLanguaje) => this.http.get<any[]>(`assets/i18n/${chosenLanguaje}/projects.${chosenLanguaje}.json`))
    )
  }

  getCategories(): Observable<any[]> {
    return this.getProjects().pipe(
      map(project => Array.from(new Set(project.flatMap(p => p.category))))
    );
  }
}
