import { provideHttpClient } from '@angular/common/http';
import { appRoutes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { ENVIRONMENT_INITIALIZER, inject, NgZone } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { provideRouter } from '@angular/router';
import { akitaDevtools, DevtoolsOptions } from '@datorama/akita';
import { LoggerConfig, provideLogger } from '@office/logger';
import { ButtonComponent } from '@office/ui-components';


import { environment } from './environments/environment';

export function provideAkitaDevtools(options: Partial<DevtoolsOptions> = {}) {
  return {
    provide: ENVIRONMENT_INITIALIZER,
    multi: true,
    useFactory() {
      return () => {
        akitaDevtools(inject(NgZone), options);
      };
    },
  };
}

const loggerConfig: LoggerConfig = {
  applicaitonName: environment.appName
};

akitaDevtools({});

bootstrapApplication(AppComponent, {
  providers: [
    provideLogger(loggerConfig),
    provideRouter(appRoutes),
    provideHttpClient()
  ]
});


