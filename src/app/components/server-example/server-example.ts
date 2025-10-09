import {Component, Inject, makeStateKey, OnInit, PLATFORM_ID, TransferState, StateKey} from '@angular/core';
import {isPlatformBrowser, isPlatformServer} from '@angular/common';

@Component({
  selector: 'app-server-example',
  imports: [],
  templateUrl: './server-example.html',
  styleUrl: './server-example.scss'
})
export class ServerExample implements OnInit {
  randomGeneratedNumber: number = 0;
  RANDOM_GENERATED_NUMBER: StateKey<number> = makeStateKey("randomGeneratedNumber");

  constructor(@Inject(PLATFORM_ID) private platformId: any,
              private state: TransferState) {
  }

  ngOnInit(): void {

    console.error(this.randomGeneratedNumber);
    console.error(this.platformId);
    console.error(isPlatformServer(this.platformId));
    console.error(isPlatformBrowser(this.platformId));
    console.error("hello");
    if (isPlatformServer(this.platformId)) {
      // api call to receive data
      this.randomGeneratedNumber = Math.random() + 100;
      this.state.set(this.RANDOM_GENERATED_NUMBER, this.randomGeneratedNumber);
    } else if (isPlatformBrowser(this.platformId)) {
      console.error(window.name);
      console.error(this.state.get(this.RANDOM_GENERATED_NUMBER, -1));
    }
  }
}
