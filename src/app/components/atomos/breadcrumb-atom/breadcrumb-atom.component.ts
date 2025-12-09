import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-breadcrumb-atom',
  imports: [RouterLink],
  templateUrl: './breadcrumb-atom.component.html',
  styleUrl: './breadcrumb-atom.component.scss'
})
export class BreadcrumbAtomComponent {
  @Input() label: string= '';
  @Input() url?: string= '';
  @Input() isActive?: boolean = false;
}