import { loadingInterceptor } from './core/interceptors/loading.interceptor';
import { reqHeaderInterceptor } from './core/interceptors/req-header.interceptor';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';
import { resErrorInterceptor } from './core/interceptors/res-error.interceptor';
import { NgxSpinnerModule } from 'ngx-spinner';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes , withViewTransitions()),
importProvidersFrom(BrowserAnimationsModule , NgxSpinnerModule ),
provideToastr()
    ,provideHttpClient(withFetch() , withInterceptors([reqHeaderInterceptor , resErrorInterceptor , loadingInterceptor])),
     provideClientHydration()]
};
