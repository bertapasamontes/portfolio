import { Component } from '@angular/core';
import { BoxProjectComponent } from "../../atomos/box-project/box-project.component";
import { ProjectsService } from '../../../services/projects.service';
import { FilterCategoryComponent } from "../../organism/filter-category/filter-category.component";
import { TranslationService } from '../../../services/translation.service';

@Component({
  selector: 'app-portfolio-layout',
  imports: [BoxProjectComponent, FilterCategoryComponent],
  templateUrl: './portfolio-layout.component.html',
  styleUrl: './portfolio-layout.component.scss'
})
export class PortfolioLayoutComponent {
  projects: any[] = [];
  filteredProjects: any[] = [];
  categories: any[] = [];
  activeCategory: string[] = [];

  translatedContent: Record<string,string> = {};

  constructor(
    private projectsService: ProjectsService,
    private translationService: TranslationService
  ){}

  ngOnInit(){
    this.translationService.translations$.subscribe(data => {
      if(data) this.translatedContent = data.common;
    });

    this.projectsService.getProjects().subscribe((data)=>{
      this.projects = data;
      this.createNewArrayOfFilteredProjects();
    });
    this.projectsService.getCategories().subscribe((data)=>{this.categories = data});
  }

  onCategoryChanged(event: { category: string; checked: boolean }) {
    if(event.checked){
      this.activeCategory.push(event.category);
    } 
    else {
      this.activeCategory = this.activeCategory.filter(category => category != event.category)
    }
    this.createNewArrayOfFilteredProjects();
  }

  createNewArrayOfFilteredProjects(){
    if(this.activeCategory.length === 0){
      this.filteredProjects = [...this.projects];
    }
    else{
      this.filteredProjects = this.projects.filter(project => project.category.some( (category: string) => this.activeCategory.includes(category)));
    }
  }
}
