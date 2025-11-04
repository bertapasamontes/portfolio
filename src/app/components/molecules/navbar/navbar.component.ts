import { Component } from '@angular/core';
import { LanguagesDropdownComponent } from "../../atomos/languages-dropdown/languages-dropdown.component";

@Component({
  selector: 'app-navbar',
  imports: [LanguagesDropdownComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

}
