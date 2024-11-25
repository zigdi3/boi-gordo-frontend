import { DashboardModule } from './dashboard/dashboard.module';
import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '../app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { routes } from '../app.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginModule } from './login/login.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LoginModule,
    DashboardModule,
  ],
  bootstrap: [AppComponent],
  exports: [],
  providers: [DatePipe],
})
export class AppModule {}
