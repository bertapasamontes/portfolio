import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-box-project',
  imports: [],
  templateUrl: './box-project.component.html',
  styleUrl: './box-project.component.scss'
})
export class BoxProjectComponent {
  @Input() project!:{name:string, description: string, image: string, tags:string[], type_contract:string, position: string, duration: string};
}
