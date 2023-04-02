import { Provider } from '@angular/core';
import { LoggerConfig } from './lib/logger.interface';
import { LOGGER_CONFIG } from './lib/logger.token';

export * from './lib/logger.service';
export * from './lib/logger.interface';
export * from './lib/logger.token';

export function provideLogger(config: LoggerConfig): Provider {
    return ({
        provide: LOGGER_CONFIG,
        useValue: config,
        multi: false
    })
}


