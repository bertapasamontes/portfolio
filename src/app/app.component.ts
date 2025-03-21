import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PortfolioLayoutComponent } from "./components/layouts/portfolio-layout/portfolio-layout.component";

@Component({
  selector: 'app-root',
  imports: [PortfolioLayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
}
