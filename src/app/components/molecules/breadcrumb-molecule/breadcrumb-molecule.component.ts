import { Component, Input } from '@angular/core';
import { BreadcrumbAtomComponent } from "../../atomos/breadcrumb-atom/breadcrumb-atom.component";

@Component({
  selector: 'app-breadcrumb-molecule',
  imports: [BreadcrumbAtomComponent],
  templateUrl: './breadcrumb-molecule.component.html',
  styleUrl: './breadcrumb-molecule.component.scss'
})
export class BreadcrumbMoleculeComponent {
  @Input() items: {label: string, url?: string, isActive?: boolean}[] = [];
}
