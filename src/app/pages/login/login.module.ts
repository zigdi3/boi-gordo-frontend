import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from './login.service';
import { UserContextService } from '../../helpers/services/user-context.service';
import { RegisterComponent } from './register/register.component';
import { SigninComponent } from './signin/signin.component';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [LoginComponent, RegisterComponent, SigninComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatTabsModule],
  exports: [LoginComponent, RegisterComponent, SigninComponent],
  providers: [LoginService, UserContextService],
})
export class LoginModule {}
