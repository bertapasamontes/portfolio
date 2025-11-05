import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PortfolioLayoutComponent } from "./components/layouts/portfolio-layout/portfolio-layout.component";
import { TranslationService } from './services/translation.service';
import { LanguageService } from './services/language.service';
import { FooterComponent } from "./components/molecules/footer/footer.component";
import { NavbarComponent } from "./components/molecules/navbar/navbar.component";

@Component({
  selector: 'app-root',
  imports: [PortfolioLayoutComponent, FooterComponent, NavbarComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';

  constructor(
    private translateService: TranslationService,
    private languageService: LanguageService
  ){}

  ngOnInit(){
    const languageSelected = this.languageService.getLanguaje();
    this.translateService.loadAllSections(languageSelected);
  }
}
