import {Component} from '@angular/core';

@Component({
  selector: 'app-no-hydration',
  imports: [],
  templateUrl: './no-hydration-example.component.html',
  styleUrl: './no-hydration-example.component.scss',
  host: {ngSkipHydration: 'true'}
})
// ^ host: {ngSkipHydration: 'true'} causes flickering since hydration is disabled here
export class NoHydrationExample {
}
