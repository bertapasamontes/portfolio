import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SmallInfoPorfileComponent } from "./components/atomos/small-info-porfile/small-info-porfile.component";

@Component({
  selector: 'app-root',
  imports: [SmallInfoPorfileComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
}
