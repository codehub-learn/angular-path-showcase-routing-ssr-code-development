import { Routes } from '@angular/router';
import {PrerenderExample} from './components/prerender-example/prerender-example';
import {ServerExample} from './components/server-example/server-example';
import {ClientExample} from './components/client-example/client-example';

export const routes: Routes = [
  { path: '', redirectTo: 'prerender-example', pathMatch: 'full' },
  { path: 'prerender-example', component: PrerenderExample },
  { path: 'server-example', component: ServerExample },
  { path: 'client-example', component: ClientExample }
];
