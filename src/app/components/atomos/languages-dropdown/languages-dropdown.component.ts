import { Component } from '@angular/core';
import { LanguageService } from '../../../services/language.service';

@Component({
  selector: 'app-languages-dropdown',
  imports: [],
  templateUrl: './languages-dropdown.component.html',
  styleUrl: './languages-dropdown.component.scss'
})
export class LanguagesDropdownComponent {
  currentLang: string;

  constructor(
    private languageService: LanguageService
  ){
    this.currentLang = languageService.getLanguaje();
  }

  changeLanguaje(event: Event){
    const select = event.target as HTMLSelectElement;
    const newLanguaje = select.value;
    this.languageService.setLanguaje(newLanguaje);
  }


}
