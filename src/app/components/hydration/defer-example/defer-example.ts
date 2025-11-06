import { Component } from '@angular/core';
import {HeavyComponent} from './heavy-component/heavy-component';

@Component({
  selector: 'app-defer-example',
  imports: [
    HeavyComponent
  ],
  templateUrl: './defer-example.html',
  styleUrl: './defer-example.scss'
})
export class DeferExample {
  shouldDefer = Math.random() > 0.5;
  isButtonHidden = true;

  showButton() {
    this.isButtonHidden = false;
  }
}
