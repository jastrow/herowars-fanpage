import { InjectionToken } from "@angular/core";

export interface IEnv {
    apiUrl: string;
}

export const ENVIRONMENT = new InjectionToken<IEnv>('environment');