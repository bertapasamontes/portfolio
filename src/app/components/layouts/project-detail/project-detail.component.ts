import { Component } from '@angular/core';
import { ProjectsService } from '../../../services/projects.service';

@Component({
  selector: 'app-project-detail',
  imports: [],
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.scss'
})
export class ProjectDetailComponent {
  projects: any[] = [];
  
  constructor(
    private projectsService: ProjectsService
  ){}

  ngOnInit(){
    this.projectsService.getProjects().subscribe((data)=>{this.projects = data})
  }

}
