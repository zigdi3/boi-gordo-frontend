import { MonthFullComponent } from './month-full/month-full.component';
import { CellComponent } from './cell/cell.component';
import { WeekComponent } from './week/week.component';
import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const components = [MonthFullComponent, CellComponent, WeekComponent];

@NgModule({
  declarations: components,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: components,
  providers: [],
})
export class DashboardModule {}
