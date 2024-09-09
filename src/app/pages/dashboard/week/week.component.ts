import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { week } from './week.interface';
import { CellComponent } from '../cell/cell.component';

@Component({
  selector: 'boi-week',
  standalone: true,
  imports: [CommonModule, FormsModule, CellComponent],
  templateUrl: './week.component.html',
  styleUrl: './week.component.css',
})
export class WeekComponent {
  week!: week;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.week.days.push({
      date: new Date().getDay(),
      dayOfWeek: new Date().getDay(),
      month: new Date().getMonth(),
    });
  }
}
