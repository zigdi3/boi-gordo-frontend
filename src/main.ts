import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/pages/app.module';
import { LOCALE_ID } from '@angular/core';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
