import { Component } from '@angular/core';
import { SmallInfoPorfileComponent } from '../../atomos/small-info-porfile/small-info-porfile.component';
import { BoxProjectComponent } from "../../atomos/box-project/box-project.component";
import { HttpClient } from '@angular/common/http';

import proyectos from '../../../proyectos.json';

@Component({
  selector: 'app-portfolio-layout',
  imports: [SmallInfoPorfileComponent, BoxProjectComponent],
  templateUrl: './portfolio-layout.component.html',
  styleUrl: './portfolio-layout.component.scss'
})
export class PortfolioLayoutComponent {
  projects = proyectos;
  // constructor(
  //   private http: HttpClient
  // ){
  //   http.get("../proyectos.json").subscribe(respuesta=>{
  //     this.projects = respuesta;
  //     console.log(respuesta);
  //   })
  // }
}
