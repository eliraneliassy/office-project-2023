import { LoggerConfig } from './logger.interface';
import { LOGGER_CONFIG } from './logger.token';

import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor(@Inject(LOGGER_CONFIG) private loggerConfig: LoggerConfig) { }

  log(msg: string) {
    console.group('Application Name, ', this.loggerConfig.applicaitonName);
    console.log('LOG MESSAGE: ', msg);
    console.groupEnd();
  }
}
