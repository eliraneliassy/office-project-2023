import { InjectionToken } from "@angular/core";
import { LoggerConfig } from "./logger.interface";

export const LOGGER_CONFIG: InjectionToken<LoggerConfig> 
= new InjectionToken<LoggerConfig>('Logger Config')