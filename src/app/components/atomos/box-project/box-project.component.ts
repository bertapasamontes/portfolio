import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-box-project',
  imports: [RouterLink],
  templateUrl: './box-project.component.html',
  styleUrl: './box-project.component.scss'
})
export class BoxProjectComponent {
  @Input() project!:{name:string, slug: string,description: string, image: string, tags:string[], type_contract:string, position: string, duration: string};
}
