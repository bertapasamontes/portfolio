import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CheckboxComponent } from "../../atomos/checkbox/checkbox.component";

@Component({
  selector: 'app-category-checkbox',
  imports: [CheckboxComponent],
  templateUrl: './category-checkbox.component.html',
  styleUrl: './category-checkbox.component.scss'
})
export class CategoryCheckboxComponent {
  @Input() category!: string;

  @Output() changed = new EventEmitter<{category: string, checked: boolean}>();


  onCheckboxChecked(event: {category: string, checked: boolean}) {
    this.changed.emit(event);
  }
}
