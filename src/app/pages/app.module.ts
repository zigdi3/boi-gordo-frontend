import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '../app.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginModule } from './login/login.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { routes } from '../app.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MonthFullComponent } from './dashboard/month-full/month-full.component';
import { CellComponent } from './dashboard/cell/cell.component';

@NgModule({
  declarations: [AppComponent, MonthFullComponent, CellComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LoginModule,
  ],
  bootstrap: [AppComponent],
  exports: [],
  providers: [DatePipe],
})
export class AppModule {}
