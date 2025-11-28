import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  imports: [],
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.scss'
})
export class CheckboxComponent {
  @Input() category!: string;
  @Input() checked: boolean = false;
 
  @Output() changed = new EventEmitter<{category: string, checked: boolean}>();

  onCheckboxChanged(categoryChecked: Event) {
    this.checked = (categoryChecked.target as HTMLInputElement).checked;
    this.changed.emit({category: this.category, checked: this.checked});
  }
}
