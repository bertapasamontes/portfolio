import { Component } from '@angular/core';
import { LanguagesDropdownComponent } from "../../atomos/languages-dropdown/languages-dropdown.component";
import { TranslationService } from '../../../services/translation.service';
import { ThemeToggleComponent } from "../../atomos/theme-toggle/theme-toggle.component";

@Component({
  selector: 'app-navbar',
  imports: [LanguagesDropdownComponent, ThemeToggleComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  translatedContent: Record<string,string> = {};

  constructor(
    private translationService: TranslationService
  ){}

  ngOnInit(){
    this.translationService.translations$.subscribe(data => {
      if(data) this.translatedContent = data.common;
    })
  }
}
