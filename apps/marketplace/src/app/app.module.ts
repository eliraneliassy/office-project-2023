
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HeaderComponent } from '../header/header.component';

import { ENVIRONMENT_INITIALIZER, inject, NgZone } from '@angular/core';
import { akitaDevtools, DevtoolsOptions } from '@datorama/akita';
import { InputComponent, SlideShowComponent } from '@office/ui-components';
import { ReactiveFormsModule } from '@angular/forms';
import { LoggerConfig, LoggerModule, LOGGER_CONFIG } from '@office/logger';
import { environment } from '../environments/environment';
import { BookComponent } from '@office/books';

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

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    BookComponent,
    BrowserAnimationsModule,
    MatToolbarModule,
    SlideShowComponent,
    ReactiveFormsModule,
    InputComponent,
    LoggerModule.forRoot(loggerConfig)
  ],
  providers: [
    // {
    //   provide: LOGGER_CONFIG,
    //   useValue: loggerConfig,
    //   multi: false
    // }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
