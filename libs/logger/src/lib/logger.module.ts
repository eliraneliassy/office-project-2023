import { LoggerConfig } from './logger.interface';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LOGGER_CONFIG } from './logger.token';

@NgModule({
  imports: [CommonModule],
})
export class LoggerModule {
  static forRoot(config: LoggerConfig): ModuleWithProviders<LoggerModule> {
    return {
      ngModule: LoggerModule,
      providers: [
        {
          provide: LOGGER_CONFIG,
          useValue: config,
          multi: false
        }
      ]
    }
  }
}
