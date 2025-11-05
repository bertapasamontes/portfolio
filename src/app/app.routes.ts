import { Routes } from '@angular/router';
import { PortfolioLayoutComponent } from './components/layouts/portfolio-layout/portfolio-layout.component';
import { ProjectDetailComponent } from './components/layouts/project-detail/project-detail.component';

export const routes: Routes = [
    { path: '', component: PortfolioLayoutComponent },
    { path: 'project/:name', component: ProjectDetailComponent },
    { path: '**', redirectTo: '' }
];
