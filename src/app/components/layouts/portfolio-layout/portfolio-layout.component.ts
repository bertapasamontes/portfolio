import { Component } from '@angular/core';
import { SmallInfoProfileComponent } from '../../atomos/small-info-profile/small-info-profile.component';
import { BoxProjectComponent } from "../../atomos/box-project/box-project.component";
import { HttpClient } from '@angular/common/http';

import { NavbarComponent } from "../../molecules/navbar/navbar.component";
import { ProjectsService } from '../../../services/projects.service';
import { FooterComponent } from "../../molecules/footer/footer.component";

@Component({
  selector: 'app-portfolio-layout',
  imports: [BoxProjectComponent, NavbarComponent, FooterComponent],
  templateUrl: './portfolio-layout.component.html',
  styleUrl: './portfolio-layout.component.scss'
})
export class PortfolioLayoutComponent {
  projects: any[] = [];

  constructor(
    private projectsService: ProjectsService
  ){}

  ngOnInit(){
    this.projectsService.getProjects().subscribe((data)=>{this.projects = data})
  }
  // constructor(
  //   private http: HttpClient
  // ){
  //   http.get("../proyectos.json").subscribe(respuesta=>{
  //     this.projects = respuesta;
  //     console.log(respuesta);
  //   })
  // }
}
