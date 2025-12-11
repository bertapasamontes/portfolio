import { Component, Input } from '@angular/core';
import { ProjectsService } from '../../../services/projects.service';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbMoleculeComponent } from '../../molecules/breadcrumb-molecule/breadcrumb-molecule.component';
import { TranslationService } from '../../../services/translation.service';
import { CommonTranslations } from '../../../interfaces/translation-types';

@Component({
  selector: 'app-project-detail',
  imports: [BreadcrumbMoleculeComponent],
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.scss'
})
export class ProjectDetailComponent {
  projects: any[] = [];
  project: any = {};

  @Input() projectIdRecibed: string = '';

  slug: string = 'gola';

  breadcrumbItems: any[] = []

  translatedContent: CommonTranslations | null = null;
  constructor(
    private projectsService: ProjectsService,
    private route: ActivatedRoute,
    private translationService: TranslationService
  ){}

  ngOnInit(){
    this.translationService.translations$.subscribe(data => {
      if(data) this.translatedContent = data.common;
    })
    
    this.slug = this.route.snapshot.params['name'] || 'doesnt-exist';
    this.projectsService.getProjects().subscribe((data)=>{
      this.projects = data;
      this.project = this.projects.find(project => this.slug === project.slug);

      this.breadcrumbItems = [
        { label: 'Projects', url: ''},
        { label: `${this.project.name}`, url: `/project/${this.project.slug}`, isActive: true}
      ]
    });

   
    
     
    
  }

}
