import { Component } from '@angular/core';
import { TranslationService } from '../../../services/translation.service';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  translatedContent: Record<string,string> = {};
  
    constructor(
      private translationService: TranslationService
    ){}
  
    ngOnInit(){
      this.translationService.translations$.subscribe(data => {
        if(data) this.translatedContent = data.footer;
      })
    }
}
