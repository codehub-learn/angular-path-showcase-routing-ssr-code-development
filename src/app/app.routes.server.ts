import {RenderMode, ServerRoute} from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '',
    renderMode: RenderMode.Prerender,
  },
  {path: 'prerender-example', renderMode: RenderMode.Prerender},
  {path: 'server-example', renderMode: RenderMode.Server},
  {path: 'client-example', renderMode: RenderMode.Client}
];
