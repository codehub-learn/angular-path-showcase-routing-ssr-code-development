import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering, withRoutes } from '@angular/ssr';
import { appConfig } from './app.config';
import { serverRoutes } from './app.routes.server';
import {provideClientHydration, withHttpTransferCacheOptions} from '@angular/platform-browser';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(withRoutes(serverRoutes)),
    provideClientHydration(
      withHttpTransferCacheOptions({
        includePostRequests: true, // hydration can be customized etc.
        /*filter: (req: HttpRequest<unknown>) => true, // to filter // Example: only cache requests to /api/public/* (replace true to make this work)
        includeHeaders: [], // to include headers since caching normally ignores headers
        includeRequestsWithAuthHeaders: false, // to include with auth, normally requests with authorization headers are not cached*/
      }),
    ),
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
