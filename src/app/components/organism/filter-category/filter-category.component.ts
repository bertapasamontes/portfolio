import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CategoryCheckboxComponent } from "../../molecules/category-checkbox/category-checkbox.component";

@Component({
  selector: 'app-filter-category',
  imports: [CategoryCheckboxComponent],
  templateUrl: './filter-category.component.html',
  styleUrl: './filter-category.component.scss'
})
export class FilterCategoryComponent {
  @Input() categories!: string[];

  @Output() changed = new EventEmitter<{category: string, checked: boolean}>();

  onCategoryChanged(event: {category: string, checked: boolean}) {
    this.changed.emit(event);
  }
}
