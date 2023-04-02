import { bootstrapApplication } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { provideRouter } from '@angular/router';
import { akitaDevtools } from '@datorama/akita';
import { ButtonComponent } from '@office/ui-components';

import { AppModule } from './app/app.module';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));

  akitaDevtools({
    
  });


