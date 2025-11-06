import {afterNextRender, Component} from '@angular/core';

@Component({
  selector: 'app-heavy-component',
  imports: [],
  templateUrl: './heavy-component.html',
  styleUrl: './heavy-component.scss'
})
export class HeavyComponent {
  items = [
    {
      id: 1,
      text: 'Hello',
    },
    {
      id: 2,
      text: 'Bye',
    },
    {
      id: 3,
      text: 'Excuse me',
    }
  ];

  constructor() {
    afterNextRender(() => {
      console.error("heavy component init");
      const startTime = performance.now();
      for (let i = 0; i <6000000000; i++) {}
      const endTime = performance.now();
      console.error(`heavy finished (${endTime - startTime} ms)`)
    });
  }

  showAlert(text: string) {
    alert(text);
  }
}
