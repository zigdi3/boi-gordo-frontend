import { Component } from '@angular/core';
import { week } from './week.interface';

@Component({
  selector: 'boi-week',
  templateUrl: './week.component.html',
  styleUrl: './week.component.css',
})
export class WeekComponent {
  week!: week;

  ngOnInit(): void {
    this.week.days.push({
      date: new Date().getDay(),
      dayOfWeek: new Date().getDay(),
      month: new Date().getMonth(),
    });
  }
}
