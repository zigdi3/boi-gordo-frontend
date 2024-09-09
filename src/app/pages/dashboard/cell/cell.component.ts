import { Component, Input } from '@angular/core';

@Component({
  selector: 'boi-cell',
  templateUrl: './cell.component.html',
  styleUrl: './cell.component.css',
})
export class CellComponent {
  @Input() day = 1;
  @Input() notes = [];
}
