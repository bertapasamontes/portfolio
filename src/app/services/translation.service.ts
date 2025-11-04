import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LanguageService } from './language.service';
import { BehaviorSubject, forkJoin, Observable, switchMap, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private translations = new BehaviorSubject<any>({});
  translations$ = this.translations.asObservable();
  private sections = ['common', 'about'];

 constructor(
    private http: HttpClient,
    private languageService: LanguageService
  ) { 
    languageService.currentLanguaje$.pipe(switchMap(languaje => this.loadAllSections(languaje)))
  }

  private loadAllSections(chosenLanguaje: string){
    const requests = this.sections.map(section => this.http.get(`assets/i18n/${chosenLanguaje}/${section}.${chosenLanguaje}.json`)); //lista de nombres de archivos que queremos traducir

    return forkJoin(requests).pipe(
      map(results => {
        const allData: any = {}; //creamos json vació para guardar toda la info de todas las secciones
        this.sections.forEach((key, index) => (allData[key] = results[index])); // recorremos las secciones existentes y las guardamos en allData
        return allData;
      } 
    ))
  }
}

