import { Routes } from '@angular/router';
import {PrerenderExample} from './components/prerender-example/prerender-example';
import {ServerExample} from './components/server-example/server-example';
import {ClientExample} from './components/client-example/client-example';
import {DeferExample} from './components/hydration/defer-example/defer-example';
import {RenderMode} from '@angular/ssr';
import {NoHydrationExample} from './components/hydration/no-hydration-example/no-hydration-example.component';
import {HydrationMismatchError} from './components/hydration/hydration-mismatch-error/hydration-mismatch-error';

export const routes: Routes = [
  { path: '', redirectTo: 'prerender-example', pathMatch: 'full' },
  { path: 'prerender-example', component: PrerenderExample },
  { path: 'server-example', component: ServerExample },
  { path: 'client-example', component: ClientExample },
  {path: 'defer-example', component: DeferExample},
  {path: 'no-hydration-example', component: NoHydrationExample},
  {path: 'hydration-mismatch-example', component: HydrationMismatchError},
];
