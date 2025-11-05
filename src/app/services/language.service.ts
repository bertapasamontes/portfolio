import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private currentLanguaje = new BehaviorSubject<string>('es');
  currentLanguaje$ = this.currentLanguaje.asObservable();

  setLanguaje(lang: string){
    localStorage.removeItem('languaje');
    this.currentLanguaje.next(lang);
    localStorage.setItem('languaje', lang);
  }

  getLanguaje(): string{
    return localStorage.getItem('languaje') || this.currentLanguaje.value;
  }
}
