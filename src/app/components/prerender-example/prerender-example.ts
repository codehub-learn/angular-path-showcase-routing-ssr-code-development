import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-prerender-example',
  imports: [],
  templateUrl: './prerender-example.html',
  styleUrl: './prerender-example.scss'
})
export class PrerenderExample implements OnInit {
  ngOnInit(): void {
    console.error("hello");
    console.error(window.name)
    // other stuff not working: window, localStorage, document events, navigator
    localStorage.setItem("prerender-example", JSON.stringify({}))
  }
}
